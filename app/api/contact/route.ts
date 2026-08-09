import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const MIN_COMPLETION_MS = 3_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const CONTACT_TOPICS = ["New site", "Redesign", "Hosting & Care", "Other"] as const;

const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(100).refine(noLineBreaks),
    email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
    company: z.string().trim().max(120).refine(noLineBreaks),
    topic: z.enum(CONTACT_TOPICS),
    consent: z.literal(true),
    message: z.string().trim().min(10).max(5_000),
    website: z.string().max(200),
    startedAt: z.number().int().positive(),
  })
  .strict();

type RateLimitEntry = { count: number; resetAt: number };

// Best-effort only: each serverless instance has its own memory and lifecycle.
const rateLimits = new Map<string, RateLimitEntry>();

function noLineBreaks(value: string) {
  return !/[\r\n]/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || null;
}

function isRateLimited(clientIp: string | null) {
  if (!clientIp) return false;

  const now = Date.now();
  const existing = rateLimits.get(clientIp);

  if (!existing || existing.resetAt <= now) {
    if (rateLimits.size >= 10_000) {
      for (const [ip, entry] of rateLimits) {
        if (entry.resetAt <= now) rateLimits.delete(ip);
      }
    }

    if (rateLimits.size >= 10_000) return false;
    rateLimits.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX_REQUESTS;
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([new URL(request.url).origin, ...configuredOrigins]);

  return allowedOrigins.has(origin);
}

async function readLimitedBody(request: Request) {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let body = "";
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }

    body += decoder.decode(value, { stream: true });
  }

  return body + decoder.decode();
}

function genericError(status = 400) {
  return NextResponse.json(
    { error: "We could not send your message. Please check the form and try again." },
    { status },
  );
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    console.warn("[Contact API] Rejected request origin");
    return genericError(403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return genericError(415);
  }

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return genericError(413);
  }

  if (isRateLimited(getClientIp(request))) {
    console.warn("[Contact API] Rate limit exceeded");
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  try {
    const rawBody = await readLimitedBody(request);
    if (rawBody === null) {
      return genericError(413);
    }

    let decodedBody: unknown;
    try {
      decodedBody = JSON.parse(rawBody);
    } catch {
      return genericError();
    }

    const parsed = contactSchema.safeParse(decodedBody);
    if (!parsed.success) {
      console.warn("[Contact API] Rejected invalid submission");
      return genericError();
    }

    const submission = parsed.data;
    const completionTime = Date.now() - submission.startedAt;

    if (completionTime < MIN_COMPLETION_MS || completionTime > 24 * 60 * 60 * 1_000) {
      console.warn("[Contact API] Rejected invalid completion time");
      return genericError();
    }

    // Quietly accept honeypot submissions so bots receive no useful signal.
    if (submission.website.trim()) {
      console.warn("[Contact API] Honeypot triggered");
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("[Contact API] Required email configuration is missing");
      return genericError(503);
    }

    const safe = {
      name: escapeHtml(submission.name),
      email: escapeHtml(submission.email),
      company: escapeHtml(submission.company),
      topic: escapeHtml(submission.topic),
      message: escapeHtml(submission.message),
    };
    const companyText = submission.company || "N/A";
    const resend = new Resend(apiKey);

    const primaryResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: submission.email,
      subject: `New inquiry from ${submission.name}`,
      text: [
        "New Contact Request",
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Company: ${companyText}`,
        `Topic: ${submission.topic}`,
        "Consent to be contacted: Yes",
        "",
        "Message:",
        submission.message,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#e9eef5;background:#05070b;padding:24px">
          <h2 style="margin-top:0;color:#49c2c7">New Contact Request</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Company:</strong> ${safe.company || "N/A"}</p>
          <p><strong>Topic:</strong> ${safe.topic}</p>
          <p><strong>Consent to be contacted:</strong> Yes</p>
          <hr style="border:0;border-top:1px solid #1b222c;margin:20px 0" />
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${safe.message}</p>
        </div>`,
    });

    if (primaryResult.error) {
      console.error("[Contact API] Primary email delivery was rejected");
      return genericError(502);
    }

    const acknowledgementResult = await resend.emails.send({
      from: fromEmail,
      to: submission.email,
      subject: "Thanks for reaching out to McPherson Digital Works",
      text: [
        `Thanks for getting in touch, ${submission.name}.`,
        "",
        "I've received your message and will review it shortly. You can typically expect a response within 1-2 business days.",
        "",
        "Your request:",
        `Email: ${submission.email}`,
        ...(submission.company ? [`Company: ${submission.company}`] : []),
        `Topic: ${submission.topic}`,
        "",
        "Message you sent:",
        submission.message,
        "",
        "- Matthew McPherson",
        "McPherson Digital Works",
        "https://mcphersondigitalworks.com",
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.7;color:#e9eef5;background:#05070b;padding:24px">
          <h2 style="margin-top:0;color:#49c2c7">Thanks for getting in touch, ${safe.name}.</h2>
          <p>I've received your message and will review it shortly. You can typically expect a response within <strong>1-2 business days</strong>.</p>
          <p><strong>Your request:</strong></p>
          <ul>
            <li><strong>Email:</strong> ${safe.email}</li>
            ${safe.company ? `<li><strong>Company:</strong> ${safe.company}</li>` : ""}
            <li><strong>Topic:</strong> ${safe.topic}</li>
          </ul>
          <p><strong>Message you sent:</strong></p>
          <p style="white-space:pre-wrap;border-left:3px solid #1b222c;padding-left:12px;color:#c4ccd8">${safe.message}</p>
          <p>- Matthew McPherson<br />McPherson Digital Works<br /><a href="https://mcphersondigitalworks.com" style="color:#49c2c7">mcphersondigitalworks.com</a></p>
        </div>`,
    });

    if (acknowledgementResult.error) {
      // The primary submission is already accepted; do not make the user retry it.
      console.error("[Contact API] Acknowledgement email delivery was rejected");
    }

    console.info("[Contact API] Submission accepted");
    return NextResponse.json({ success: true });
  } catch {
    console.error("[Contact API] Unexpected request failure");
    return genericError(500);
  }
}

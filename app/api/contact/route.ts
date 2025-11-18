import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, topic, consent, message } = body;

    if (!name || !email || !message) {
      console.error("Contact API: missing required fields", { name, email, message });
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Normalize values
    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeCompany = (company ? String(company) : "").trim();
    const safeTopic = topic || "Not specified";
    const safeConsent = consent ? "Yes" : "No";
    const safeMessage = String(message);

    console.log("[Contact API] New submission", {
      safeName,
      safeEmail,
      safeCompany,
      safeTopic,
      safeConsent,
    });

    // --------- 1) EMAIL TO YOU (MDW) ----------
    const adminPromise = resend.emails.send({
      from: "McPherson Digital Works <contact@mcphersondigitalworks.com>",
      to: "mmcpherson.services@gmail.com", // 👈 send to a REAL inbox you check
      replyTo: safeEmail,
      subject: `New inquiry from ${safeName}`,
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #e9eef5; background:#05070b; padding:24px;">
          <h2 style="margin-top:0; color:#49c2c7;">New Contact Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany || "N/A"}</p>
          <p><strong>Topic:</strong> ${safeTopic}</p>
          <p><strong>Consent to be contacted:</strong> ${safeConsent}</p>
          <hr style="border:none; border-top:1px solid #1b222c; margin:20px 0;" />
          <p style="margin-bottom:4px;"><strong>Message:</strong></p>
          <p style="white-space:pre-line;">${safeMessage}</p>
        </div>
      `,
    });

    // --------- 2) AUTO-REPLY TO CLIENT ----------
    const autoReplyPromise = resend.emails.send({
      from: "McPherson Digital Works <contact@mcphersondigitalworks.com>",
      to: safeEmail,
      subject: "Thanks for reaching out to McPherson Digital Works",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.7; color: #e9eef5; background:#05070b; padding:24px;">
          <h2 style="margin-top:0; color:#49c2c7;">Thanks for getting in touch, ${safeName}.</h2>

          <p>
            I’ve received your message and will review it shortly. You can typically expect
            a response within <strong>1–2 business days</strong>, often sooner.
          </p>

          <p style="margin-top:16px; margin-bottom:4px;"><strong>Your request:</strong></p>
          <ul style="padding-left:18px; margin-top:4px;">
            <li><strong>Email:</strong> ${safeEmail}</li>
            ${
              safeCompany
                ? `<li><strong>Company:</strong> ${safeCompany}</li>`
                : ""
            }
            <li><strong>Topic:</strong> ${safeTopic}</li>
          </ul>

          <p style="margin-top:16px; margin-bottom:4px;"><strong>Message you sent:</strong></p>
          <p style="white-space:pre-line; border-left:3px solid #1b222c; padding-left:12px; color:#c4ccd8;">
            ${safeMessage}
          </p>

          <p style="margin-top:20px;">
            If you need to add anything or have an urgent question, you can reply directly
            to this email and it will reach me.
          </p>

          <p style="margin-top:24px;">
            — Matthew McPherson<br/>
            McPherson Digital Works<br/>
            <a href="https://mcphersondigitalworks.com" style="color:#49c2c7; text-decoration:none;">
              mcphersondigitalworks.com
            </a>
          </p>
        </div>
      `,
    });

    const [adminResult, autoReplyResult] = await Promise.all([
      adminPromise,
      autoReplyPromise,
    ]);

    console.log("[Contact API] Resend results", {
      adminResult,
      autoReplyResult,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

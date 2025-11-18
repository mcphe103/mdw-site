import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, topic, consent, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // ------------------------------------
    // SEND EMAIL USING YOUR NEW DOMAIN
    // ------------------------------------
    const data = await resend.emails.send({
      from: "McPherson Digital Works <contact@mcphersondigitalworks.com>",
      to: "contact@mcphersondigitalworks.com", // where YOU receive messages
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Consent:</strong> ${consent ? "Yes" : "No"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, data },
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

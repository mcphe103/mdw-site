import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // TODO: integrate Resend or an email service here.
    // For now we just log on the server and return 200.
    console.log("[Contact Request]", data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

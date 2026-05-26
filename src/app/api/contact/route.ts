import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "kmayorga1995@gmail.com";

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] Mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

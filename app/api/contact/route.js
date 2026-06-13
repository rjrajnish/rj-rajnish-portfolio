import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { message: "Email service is not configured on the server." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to send message right now." },
      { status: 500 },
    );
  }
}

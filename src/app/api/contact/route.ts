import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_TO_EMAIL = "info@thenextx.net";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const company = normalize(payload.company);
  const service = normalize(payload.service);
  const budget = normalize(payload.budget);
  const message = normalize(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const smtpUser = process.env.TNX_CONTACT_ID;
  const smtpPassword = process.env.TNX_CONTACT_KEY?.replace(
    /\s/g,
    ""
  );

  if (!smtpUser || !smtpPassword) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured yet. Please email info@thenextx.net directly.",
      },
      { status: 503 }
    );
  }

  const subject = `New TheNextX inquiry from ${name}`;
  const html = `
    <h2>New TheNextX contact inquiry</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(company || "-")}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(service || "-")}</td></tr>
      <tr><td><strong>Budget</strong></td><td>${escapeHtml(budget || "-")}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-line">${escapeHtml(message)}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"TheNextX" <${smtpUser}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });
  } catch (error) {
    console.error("Contact form email failed", error);

    return NextResponse.json(
      { error: "Unable to send your message. Please email info@thenextx.net." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

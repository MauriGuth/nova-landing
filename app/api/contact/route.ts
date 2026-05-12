import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_NAME = 120;
const MAX_COMPANY = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

function escapeHtml(s: string) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!
  );
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field; humans don't.
  if (typeof body._website === "string" && body._website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, MAX_NAME);
  const company = String(body.company ?? "").trim().slice(0, MAX_COMPANY);
  const email = String(body.email ?? "").trim().slice(0, MAX_EMAIL);
  const message = String(body.message ?? "").trim().slice(0, MAX_MESSAGE);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos requeridos" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? "info@novasolutions.ar";

  if (!user || !pass) {
    console.error("Missing SMTP_USER or SMTP_PASS env var");
    return NextResponse.json(
      { error: "El servicio de email no está configurado" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Nova Solutions Web" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `Nuevo contacto: ${name}${company ? ` (${company})` : ""}`,
      text: `Nombre: ${name}
Empresa: ${company || "—"}
Email: ${email}

Mensaje:
${message}
`,
      html: `<div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111;max-width:560px">
  <h2 style="color:#6366F1;margin:0 0 16px;font-size:18px">Nuevo contacto desde novasolutions.ar</h2>
  <p style="margin:0 0 6px"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
  <p style="margin:0 0 6px"><strong>Empresa:</strong> ${escapeHtml(company) || "—"}</p>
  <p style="margin:0 0 16px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#6366F1">${escapeHtml(email)}</a></p>
  <p style="margin:0 0 8px"><strong>Mensaje:</strong></p>
  <div style="padding:12px 14px;background:#F4F4F7;border-radius:8px;white-space:pre-wrap;border-left:3px solid #6366F1">${escapeHtml(message)}</div>
  <p style="margin:18px 0 0;font-size:12px;color:#6B7280">Podés responder este correo y le llegará directo al remitente.</p>
</div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed", err);
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }
}

import { env } from "../config/env.js";

export async function sendContactMail({ name, email, subject, message }) {
  if (!env.resendApiKey) throw new Error("RESEND_API_KEY is not configured");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.mailFrom,
      to: [env.contactTo],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Email provider error ${res.status}: ${detail}`);
  }
}

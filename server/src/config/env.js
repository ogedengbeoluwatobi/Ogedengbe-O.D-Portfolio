import "dotenv/config";

export const env = {
  port: Number(process.env.PORT) || 5000,
  isProd: process.env.NODE_ENV === "production",
  clientUrls: (process.env.CLIENT_URL || "http://localhost:5173")
    .split(",")
    .map((u) => u.trim().replace(/\/$/, ""))
    .filter(Boolean),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  contactTo: process.env.CONTACT_TO || process.env.SMTP_USER,
};

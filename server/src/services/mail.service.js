import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let transporter;
const getTransporter = () => {
  if (!env.smtpUser || !env.smtpPass) {
    throw new Error("SMTP credentials are not configured");
  }
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: { user: env.smtpUser, pass: env.smtpPass },
  });
  return transporter;
};

export const sendContactMail = ({ name, email, subject, message }) =>
  getTransporter().sendMail({
    from: `"Portfolio Contact" <${env.smtpUser}>`,
    to: env.contactTo,
    replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

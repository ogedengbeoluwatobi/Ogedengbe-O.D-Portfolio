import { sendContactMail } from "../services/mail.service.js";

export async function submitContact(req, res, next) {
  try {
    await sendContactMail(req.contact);
    res.status(200).json({ success: true, message: "Message sent" });
  } catch (err) {
    next(err);
  }
}

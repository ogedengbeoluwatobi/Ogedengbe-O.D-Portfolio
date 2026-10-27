const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(req, res, next) {
  const body = req.body ?? {};
  const data = {};
  for (const key of ["name", "email", "subject", "message"]) {
    data[key] = typeof body[key] === "string" ? body[key].trim() : "";
  }

  const errors = {};
  if (data.name.length < 2 || data.name.length > 100) errors.name = "Name must be 2–100 characters";
  if (!EMAIL_RE.test(data.email) || data.email.length > 254) errors.email = "Enter a valid email";
  if (data.subject.length < 2 || data.subject.length > 150) errors.subject = "Subject must be 2–150 characters";
  if (data.message.length < 5 || data.message.length > 5000) errors.message = "Message must be 5–5000 characters";

  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, message: "Validation failed", errors });
  }
  req.contact = data;
  next();
}

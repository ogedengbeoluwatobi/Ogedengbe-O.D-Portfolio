import { env } from "../config/env.js";

export const notFound = (req, res) =>
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: status === 500 ? "Something went wrong. Please try again." : err.message,
    ...(!env.isProd && { detail: err.message }),
  });
};

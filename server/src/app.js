import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.routes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

app.set("trust proxy", 1); // correct client IPs behind Render/Vercel proxies
app.use(helmet());
app.use(
  cors({
    origin: (origin, cb) =>
      !origin || env.clientUrls.includes(origin) ? cb(null, true) : cb(new Error("Not allowed by CORS")),
  }),
);
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

import { Router } from "express";
import { submitContact } from "../controllers/contact.controller.js";
import { validateContact } from "../middleware/validateContact.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router = Router();
router.post("/", contactLimiter, validateContact, submitContact);

export default router;

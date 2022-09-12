import express from "express";
import { postContactForm } from "../controllers/contactFormControllers.js";
const router = express.Router();

router.route("/").post(postContactForm);

export default router;

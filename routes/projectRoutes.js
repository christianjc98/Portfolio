import express from "express";
import { getAllProjects } from "../controllers/projectControllers.js";
const router = express.Router();

router.route("/").get(getAllProjects);

export default router;

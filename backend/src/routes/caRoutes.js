import { Router } from "express";
import { listCAs } from "../controllers/caController.js";

const router = Router();

router.get("/", listCAs);

export default router;

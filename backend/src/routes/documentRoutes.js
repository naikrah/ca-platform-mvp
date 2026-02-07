import { Router } from "express";
import { listDocuments } from "../controllers/documentController.js";

const router = Router();

router.get("/", listDocuments);

export default router;

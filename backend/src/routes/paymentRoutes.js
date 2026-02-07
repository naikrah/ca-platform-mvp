import { Router } from "express";
import { listPayments } from "../controllers/paymentController.js";

const router = Router();

router.get("/", listPayments);

export default router;

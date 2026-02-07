import { Router } from "express";
import { createBooking, listBookings } from "../controllers/bookingController.js";

const router = Router();

router.get("/", listBookings);
router.post("/", createBooking);

export default router;

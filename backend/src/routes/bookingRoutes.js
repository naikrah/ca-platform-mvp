const express = require("express");
const {
  createBooking,
  listBookings,
  getBooking,
  updateBookingStatus
} = require("../controllers/bookingController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", requireAuth, createBooking);
router.get("/", requireAuth, listBookings);
router.get("/:id", requireAuth, getBooking);
router.patch("/:id/status", requireAuth, updateBookingStatus);

module.exports = router;

const express = require("express");
const {
  createPayment,
  getPayment,
  updatePaymentStatus
} = require("../controllers/paymentController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", requireAuth, createPayment);
router.get("/:id", requireAuth, getPayment);
router.patch("/:id/status", requireAuth, updatePaymentStatus);

module.exports = router;

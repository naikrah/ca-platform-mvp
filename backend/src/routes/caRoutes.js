const express = require("express");
const { listCAs, getCA, updateCA, setAvailability } = require("../controllers/caController");
const { requireAuth, requireRole } = require("../middleware/auth");

const router = express.Router();

router.get("/", listCAs);
router.get("/:id", getCA);
router.patch("/:id", requireAuth, requireRole(["ca"]), updateCA);
router.post("/:id/availability", requireAuth, requireRole(["ca"]), setAvailability);

module.exports = router;

const express = require("express");
const { sendMessage, listMessages } = require("../controllers/messageController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", requireAuth, sendMessage);
router.get("/", requireAuth, listMessages);

module.exports = router;

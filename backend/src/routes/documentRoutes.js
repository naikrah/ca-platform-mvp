const express = require("express");
const {
  uploadDocument,
  listDocuments,
  downloadDocument
} = require("../controllers/documentController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/upload", requireAuth, uploadDocument);
router.get("/", requireAuth, listDocuments);
router.get("/:id/download", requireAuth, downloadDocument);

module.exports = router;

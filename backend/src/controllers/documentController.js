const uploadDocument = (req, res) => {
  res.status(201).json({ message: "Upload document placeholder" });
};

const listDocuments = (req, res) => {
  res.json({ items: [], message: "Documents list placeholder" });
};

const downloadDocument = (req, res) => {
  res.json({ id: req.params.id, message: "Download document placeholder" });
};

module.exports = { uploadDocument, listDocuments, downloadDocument };

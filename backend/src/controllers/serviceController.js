const listServices = (req, res) => {
  res.json({ items: [], message: "Services placeholder" });
};

const createService = (req, res) => {
  res.status(201).json({ message: "Create service placeholder", data: req.body });
};

const updateService = (req, res) => {
  res.json({ id: req.params.id, updates: req.body, message: "Update service placeholder" });
};

module.exports = { listServices, createService, updateService };

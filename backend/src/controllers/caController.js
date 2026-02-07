const listCAs = (req, res) => {
  res.json({ items: [], message: "CA list placeholder" });
};

const getCA = (req, res) => {
  res.json({ id: req.params.id, message: "CA detail placeholder" });
};

const updateCA = (req, res) => {
  res.json({ id: req.params.id, updates: req.body, message: "CA update placeholder" });
};

const setAvailability = (req, res) => {
  res.json({ id: req.params.id, availability: req.body, message: "Availability placeholder" });
};

module.exports = { listCAs, getCA, updateCA, setAvailability };

const createPayment = (req, res) => {
  res.status(201).json({ message: "Create payment placeholder", data: req.body });
};

const getPayment = (req, res) => {
  res.json({ id: req.params.id, message: "Payment detail placeholder" });
};

const updatePaymentStatus = (req, res) => {
  res.json({ id: req.params.id, status: req.body.status, message: "Payment status placeholder" });
};

module.exports = { createPayment, getPayment, updatePaymentStatus };

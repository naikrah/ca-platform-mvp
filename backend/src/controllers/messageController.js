const sendMessage = (req, res) => {
  res.status(201).json({ message: "Send message placeholder", data: req.body });
};

const listMessages = (req, res) => {
  res.json({ items: [], message: "Messages list placeholder" });
};

module.exports = { sendMessage, listMessages };

const register = (req, res) => {
  res.status(201).json({ message: "Registration placeholder", data: req.body });
};

const login = (req, res) => {
  res.json({ message: "Login placeholder", token: "mock-jwt" });
};

const logout = (req, res) => {
  res.json({ message: "Logout placeholder" });
};

const me = (req, res) => {
  res.json({ message: "Profile placeholder", user: req.user || null });
};

module.exports = { register, login, logout, me };

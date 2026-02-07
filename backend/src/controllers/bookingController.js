const createBooking = (req, res) => {
  res.status(201).json({ message: "Create booking placeholder", data: req.body });
};

const listBookings = (req, res) => {
  res.json({ items: [], message: "Bookings list placeholder" });
};

const getBooking = (req, res) => {
  res.json({ id: req.params.id, message: "Booking detail placeholder" });
};

const updateBookingStatus = (req, res) => {
  res.json({ id: req.params.id, status: req.body.status, message: "Booking status placeholder" });
};

module.exports = { createBooking, listBookings, getBooking, updateBookingStatus };

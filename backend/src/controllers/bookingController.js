export const listBookings = (_req, res) => {
  res.json({ bookings: [] });
};

export const createBooking = (_req, res) => {
  res.status(201).json({ message: "Booking created (placeholder)" });
};

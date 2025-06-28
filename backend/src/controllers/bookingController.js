import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { roomId, fromDate, toDate } = req.body;
  const userId = req.user.id;

  try {
    const booking = new Booking({
      userId,
      roomId,
      fromDate,
      toDate
    });
    await booking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch {
    res.status(500).json({ message: 'Booking failed' });
  }
};

export const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id }).populate('roomId');
  res.json(bookings);
};

export const cancelBooking = async (req, res) => {
  const userId = req.user.id;
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findOne({ _id: bookingId, userId });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found or unauthorized' });
    }

    await Booking.deleteOne({ _id: bookingId });
    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    console.error('Error cancelling booking:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

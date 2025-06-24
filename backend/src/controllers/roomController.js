import Room from '../models/Room.js';
import Booking from '../models/Booking.js';

export const getAvailableRooms = async (req, res) => {
  const { from, to } = req.query;
  const fromDate = new Date(from);
  const toDate = new Date(to);

  const bookings = await Booking.find({
    $or: [
      { fromDate: { $lte: toDate }, toDate: { $gte: fromDate } }
    ]
  });

  const bookedRoomIds = bookings.map(b => b.roomId.toString());
  const availableRooms = await Room.find({ _id: { $nin: bookedRoomIds } });

  res.json(availableRooms);
};

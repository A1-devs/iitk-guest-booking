import express from 'express';
import protect from '../middleware/authMiddleware.js';
import requireAdmin from '../middleware/adminMiddleware.js';
import Room from '../models/Room.js';
import Booking from '../models/Booking.js';
import User from '../models/User.js';

const router = express.Router();

// Get all rooms (admin only)
router.get('/bookings', protect, requireAdmin, async (req, res) => {
  const bookings = await Booking.find({}).populate('roomId').populate('userId');
  res.json(bookings);
});


// Admin dashboard welcome (basic check)
router.get('/dashboard', protect, requireAdmin, (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

// // Get all rooms with maintenance status
// router.get('/rooms', protect, requireAdmin, async (req, res) => {
//   try {
//     const rooms = await Room.find({});
//     res.json(rooms);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Update maintenance status for a room
// router.patch('/rooms/:id/maintenance', protect, requireAdmin, async (req, res) => {
//   try {
//     const room = await Room.findById(req.params.id);
//     if (!room) return res.status(404).json({ message: 'Room not found' });

//     // Expecting { maintenanceStatus: 'done' } or 'pending'
//     room.maintenanceStatus = req.body.maintenanceStatus;
//     await room.save();
//     res.json(room);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// Get total bookings count
router.get('/bookings/count', protect, requireAdmin, async (req, res) => {
  try {
    const count = await Booking.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/users', protect, requireAdmin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;

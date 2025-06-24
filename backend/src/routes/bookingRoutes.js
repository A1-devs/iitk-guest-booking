import express from 'express';
import { createBooking, getUserBookings, cancelBooking } from '../controllers/bookingController.js';
import protect from '../middleware/authMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/me', protect, getUserBookings);
router.delete('/:id', authMiddleware, cancelBooking);

export default router;

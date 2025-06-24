import express from 'express';
import { getAvailableRooms } from '../controllers/roomController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/available', protect, getAvailableRooms);

export default router;

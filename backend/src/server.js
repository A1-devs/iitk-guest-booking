import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
//import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

import adminRoutes from './routes/adminRoutes.js';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Allow your frontend origin
  credentials: true                // If you use cookies or need credentials
}));
app.use('/api/admin', adminRoutes);
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

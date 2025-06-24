import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  fromDate: Date,
  toDate: Date,
  paymentUTR: String,
  status: { type: String, default: 'confirmed' }
});

export default mongoose.model('Booking', bookingSchema);

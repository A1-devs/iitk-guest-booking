import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: String,
  hall: String,
  type: String, // AC or Non-AC
  price: Number
});

export default mongoose.model('Room', roomSchema);

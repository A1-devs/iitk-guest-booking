import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  resetToken: String,               // added field
  resetTokenExpiry: Date,           // added field
});

export default mongoose.model('User', userSchema);

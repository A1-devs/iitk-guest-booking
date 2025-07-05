import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  resetToken: String,               // added field
  resetTokenExpiry: Date,          // added field
  isAdmin: { type: Boolean, default: false }
});

export default mongoose.model('User', userSchema);

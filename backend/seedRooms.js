import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Room from './src/models/Room.js';
import connectDB from './src/config/db.js';

dotenv.config();

const rooms = [
  // Hall 2
  { name: 'Room H2-101', hall: 'Hall 2', type: 'AC' },
  { name: 'Room H2-102', hall: 'Hall 2', type: 'AC' },
  { name: 'Room H2-103', hall: 'Hall 2', type: 'Non-AC' },

  // Hall 3
  { name: 'Room H3-201', hall: 'Hall 3', type: 'AC' },
  { name: 'Room H3-202', hall: 'Hall 3', type: 'AC' },
  { name: 'Room H3-203', hall: 'Hall 3', type: 'Non-AC' },

  // Hall 5
  { name: 'Room H5-301', hall: 'Hall 5', type: 'AC' },
  { name: 'Room H5-302', hall: 'Hall 5', type: 'AC' },
  { name: 'Room H5-303', hall: 'Hall 5', type: 'Non-AC' },

  // Hall 12
  { name: 'Room H12-401', hall: 'Hall 12', type: 'AC' },
  { name: 'Room H12-402', hall: 'Hall 12', type: 'AC' },
  { name: 'Room H12-403', hall: 'Hall 12', type: 'Non-AC' },

  // Visitor Hostel
  { name: 'Room VH-1A', hall: 'Visitor Hostel', type: 'AC' },
  { name: 'Room VH-1B', hall: 'Visitor Hostel', type: 'AC' },
  { name: 'Room VH-2A', hall: 'Visitor Hostel', type: 'Non-AC' },
  { name: 'Room VH-2B', hall: 'Visitor Hostel', type: 'Non-AC' },
  { name: 'Room VH-3A', hall: 'Visitor Hostel', type: 'Non-AC' }
];

const seedRooms = async () => {
  await connectDB();
  try {
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    console.log('✅ Rooms inserted successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error inserting rooms:', err);
    process.exit(1);
  }
};

seedRooms();

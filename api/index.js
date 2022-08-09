import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelRoute from './routes/hotel.js';
import roomsRoute from './routes/rooms.js';
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongo');
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
  return res.status(500).json('error from handler');
});

app.listen(8080, () => {
  connect();
  console.log('connected to backend');
});

import express from 'express';
//use controllers for crud operations.
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';

const router = express.Router();

//create
router.post('/', createHotel);

//update
router.put('/:id', updateHotel);
//delete
router.delete('/:id', deleteHotel);

//get
router.get('/:id', getHotel);
//getall
router.get(
  '/',
  getHotels
  // const failed = true;

  // if (failed) return next(createError(401, 'No Authentication'));
);

export default router;

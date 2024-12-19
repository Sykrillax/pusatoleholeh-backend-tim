import express from 'express';
import {
  createReview,
  getReviews,
  updateReview,
  deleteReview,
} from '../controllers/review.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

router.get('/:productId', safeRoute, getReviews); 
router.post('/', safeRoute, verifyRole('buyer'), createReview); 
router.put('/:reviewId', safeRoute, verifyRole('buyer'), updateReview); 
router.delete('/:reviewId', safeRoute, verifyRole('buyer'), deleteReview);

export default router;

import express from 'express';
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  getCart,
  checkoutCart,
} from '../controllers/cart.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

router.post('/add/:productId/:quantity', safeRoute, verifyRole('buyer'), addToCart);
router.put('/update', safeRoute, verifyRole('buyer'), updateCartQuantity);
router.delete('/remove/:cartId', safeRoute, verifyRole('buyer'), removeFromCart);
router.delete('/clear', safeRoute, verifyRole('buyer'), clearCart);
router.get('/', safeRoute, verifyRole('buyer'), getCart);
router.post('/checkout', safeRoute, verifyRole('buyer'), checkoutCart);

export default router;

import express from 'express';
import { addToCart, updateCartQuantity, removeFromCart, getCart } from '../controllers/cart.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

// Buyer routes
router.post('/add', safeRoute, verifyRole('buyer'), addToCart);
router.put('/update', safeRoute, verifyRole('buyer'), updateCartQuantity);
router.delete('/remove/:cartId', safeRoute, verifyRole('buyer'), removeFromCart);
router.get('/', safeRoute, verifyRole('buyer'), getCart);

export default router;

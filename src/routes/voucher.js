import express from 'express';
import {
  getAllVouchers,
  getVoucherById,
  createVoucher,
  updateVoucher,
  deleteVoucher,
  toggleVoucherStatus,
} from '../controllers/voucher.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

// Buyer-side routes
router.get('/', safeRoute, getAllVouchers);
router.get('/:voucherId', safeRoute, getVoucherById);

// Admin-side routes
router.post('/create', safeRoute, verifyRole('admin'), createVoucher);
router.put('/update/:voucherId', safeRoute, verifyRole('admin'), updateVoucher);
router.delete('/delete/:voucherId', safeRoute, verifyRole('admin'), deleteVoucher);
router.patch('/toggle/:voucherId', safeRoute, verifyRole('admin'), toggleVoucherStatus);

export default router;

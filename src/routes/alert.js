import express from 'express';
import {
  getAlerts,
  createAlert,
  deleteAlert,
  deleteAllAlerts,
  markAlertAsRead,
} from '../controllers/alert.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

router.get('/', safeRoute, getAlerts); 
router.post('/create', safeRoute, verifyRole('admin'), createAlert); 
router.delete('/delete/:alertId', safeRoute, verifyRole('admin'), deleteAlert); 
router.delete('/delete-all', safeRoute, verifyRole('admin'), deleteAllAlerts); 
router.put('/mark-read/:alertId', safeRoute, markAlertAsRead); 

export default router;

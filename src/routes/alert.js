import express from 'express';
import {
  createAlert,
  createAlertRole,
  getAlerts,
  deleteAlert,
  deleteAllAlerts,
  markAlertAsRead,
  markAllAlertsAsRead,
} from '../controllers/alert.js';
import { safeRoute, verifyRole } from '../middlewares/middleware.js';

const router = express.Router();

router.post('/create', safeRoute, verifyRole('admin'), createAlert);
router.post('/create/role', safeRoute, verifyRole('admin'), createAlertRole);
router.get('/', safeRoute, getAlerts);
router.delete('/:alertId', safeRoute, deleteAlert);
router.delete('/', safeRoute, deleteAllAlerts);
router.put('/:alertId/read', safeRoute, markAlertAsRead); 
router.put('/read-all', safeRoute, markAllAlertsAsRead);  

export default router;

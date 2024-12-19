import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  message: { type: String, required: true },
  type: { type: String, enum: ['info', 'warning', 'error'], default: 'info' },
  target: { 
    type: String, 
    enum: ['all', 'admin', 'seller', 'buyer'], 
    default: 'all' 
  }, 
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Alert', alertSchema);

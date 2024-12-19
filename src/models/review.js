import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Bintang 1-5
  review: { type: String, default: '' }, // Komentar opsional
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Review', reviewSchema);

import Review from '../models/review.js';
import Transaction from '../models/transaction.js';
import Product from '../models/product.js';

// Create a review anjay mabar
export const createReview = async (req, res) => {
  try {
    const { productId, transactionId, rating, review } = req.body;
    const userId = req.user._id;

    // Cek transaksi valid dan status completed
    const transaction = await Transaction.findById(transactionId);
    if (!transaction || transaction.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to review this product.' });
    }

    // Pastikan status transaksi adalah Completed
    const status = await TransactionStatus.findOne({ transactionId });
    if (!status || status.status !== 'Completed') {
      return res.status(400).json({ message: 'Only completed transactions can be reviewed.' });
    }

    // Cek apakah sudah pernah memberikan review
    const existingReview = await Review.findOne({ userId, productId, transactionId });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product.' });
    }

    // Simpan review baru
    const newReview = new Review({
      userId,
      productId,
      transactionId,
      rating,
      review,
    });

    await newReview.save();

    // Perbarui rata-rata rating produk
    const reviews = await Review.find({ productId });
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const product = await Product.findById(productId);
    product.averageRating = averageRating;
    await product.save();

    res.status(201).json({ message: 'Review created successfully.', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Get reviews 
export const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId }).populate('userId', 'name');

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this product.' });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Update 
export const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, review } = req.body;
    const userId = req.user._id;

    const reviewToUpdate = await Review.findById(reviewId);
    if (!reviewToUpdate || reviewToUpdate.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this review.' });
    }

    if (rating) reviewToUpdate.rating = rating;
    if (review) reviewToUpdate.review = review;

    await reviewToUpdate.save();
    res.status(200).json({ message: 'Review updated successfully.', review: reviewToUpdate });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Delete 
export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user._id;

    const reviewToDelete = await Review.findById(reviewId);
    if (!reviewToDelete || reviewToDelete.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this review.' });
    }

    await reviewToDelete.remove();
    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

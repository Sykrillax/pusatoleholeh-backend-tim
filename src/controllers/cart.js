import mongoose from 'mongoose';
import Cart from '../models/cart.js';
import Product from '../models/product.js';

// ADD PRODUCT TO CART
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.params;

    // Konversi quantity ke angka
    const quantityInt = parseInt(quantity, 10);
    if (isNaN(quantityInt) || quantityInt <= 0) {
      return res.status(400).json({ message: 'Quantity must be a positive integer.' });
    }

    // Cek apakah produk tersedia
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    // Cek stok produk
    if (quantityInt > product.stock) {
      return res.status(400).json({ message: `Only ${product.stock} items available in stock.` });
    }

    // Cek apakah produk sudah berada di Cart
    const existingCartItem = await Cart.findOne({ userId: req.user._id, productId });
    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + quantityInt;

      if (newQuantity > product.stock) {
        return res.status(400).json({ message: `Adding exceeds stock. Only ${product.stock} items available.` });
      }

      existingCartItem.quantity = newQuantity;
      await existingCartItem.save();
      return res.status(200).json({ message: 'Cart updated.', cart: existingCartItem });
    }

    // Tambah item baru di dalam Cart
    const cartItem = new Cart({
      userId: req.user._id,
      productId,
      quantity: quantityInt,
    });

    await cartItem.save();
    res.status(201).json({ message: 'Product added to cart.', cart: cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// UPDATE CART QUANTITY
export const updateCartQuantity = async (req, res) => {
  try {
    const { cartId, quantity } = req.body;

    // Cari item dalam cart
    const cartItem = await Cart.findById(cartId).populate('productId');
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found.' });
    }

    // Cek stok produk
    const product = cartItem.productId;
    if (quantity > product.stock) {
      return res.status(400).json({ message: `Only ${product.stock} items available in stock.` });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cart quantity updated.', cart: cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// REMOVE ITEM FROM CART
export const removeFromCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    // Validasi apakah item ada di keranjang
    const cartItem = await Cart.findById(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found.' });
    }

    // Hapus item dari keranjang
    await Cart.findByIdAndDelete(cartId);
    res.status(200).json({ message: 'Product removed from cart.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// REMOVE ALL ITEMS FROM CART
export const clearCart = async (req, res) => {
  try {
    // Ambil semua item cart untuk user
    const cartItems = await Cart.find({ userId: req.user._id }).populate('productId');
    if (!cartItems.length) {
      return res.status(400).json({ message: 'Your cart is already empty.' });
    }

    // Validasi stok produk sebelum menghapus item
    for (const item of cartItems) {
      const product = item.productId;
      if (item.quantity > product.stock) {
        return res.status(400).json({ message: `Stock issue for product: ${product.name}. Only ${product.stock} left.` });
      }
    }

    // Hapus semua item dari cart
    await Cart.deleteMany({ userId: req.user._id });
    res.status(200).json({ message: 'All items removed from cart.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// GET CART ITEMS
export const getCart = async (req, res) => {
  try {
    // Ambil item cart berdasarkan userId
    const cart = await Cart.find({ userId: req.user._id }).populate('productId', 'name price stock');

    // Periksa apakah cart kosong
    if (!cart.length) {
      return res.status(200).json({ message: "Your cart is empty. Let's add some stuff!", cart: [] });
    }

    // Return cart items
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};


// CHECKOUT CART
export const checkoutCart = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = req.user._id;

    // Ambil semua item dalam cart untuk user
    const cartItems = await Cart.find({ userId }).populate('productId');
    if (!cartItems.length) {
      return res.status(400).json({ message: 'Your cart is empty.' });
    }

    // Validasi stok produk
    for (const item of cartItems) {
      const product = item.productId;
      if (!product) {
        throw new Error(`Product not found for cart item: ${item._id}`);
      }
      if (item.quantity > product.stock) {
        throw new Error(`Insufficient stock for product: ${product.name}. Only ${product.stock} left.`);
      }
    }

    // Kurangi stok produk dan hapus item dari cart
    for (const item of cartItems) {
      const product = item.productId;
      product.stock -= item.quantity;
      await product.save({ session });

      // Hapus item dari cart
      await Cart.findByIdAndDelete(item._id, { session });
    }

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ message: 'Checkout successful. Thank you for your purchase!' });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(400).json({ message: error.message });
  }
};

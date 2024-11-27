import Cart from '../models/cart.js';
import Product from '../models/product.js';

// ADD PRODUCT
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Cek apabila produk tersedia
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    // Cek apabila produk sudah berada di Cart
    const existingCartItem = await Cart.findOne({ userId: req.user._id, productId });
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      return res.status(200).json({ message: 'Cart updated.', cart: existingCartItem });
    }

    // Tambah item baru di dalam Cart
    const cartItem = new Cart({
      userId: req.user._id,
      productId,
      quantity,
    });

    await cartItem.save();
    res.status(201).json({ message: 'Product added to cart.', cart: cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// UPDATE
export const updateCartQuantity = async (req, res) => {
  try {
    const { cartId, quantity } = req.body;

    // Cari item dalam cart dan mengupdate quantity
    const cartItem = await Cart.findById(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found.' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).json({ message: 'Cart quantity updated.', cart: cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// REMOVE
export const removeFromCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    // menghapus item dalam Cart
    await Cart.findByIdAndDelete(cartId);
    res.status(200).json({ message: 'Product removed from cart.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// GET
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.user._id }).populate('productId', 'name price');
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

import Voucher from '../models/voucher.js';

// Get all active vouchers (Buyer-side)
export const getAllVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.find({ isActive: true, expired: { $gte: new Date() } });
    res.status(200).json(vouchers);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Get voucher by ID
export const getVoucherById = async (req, res) => {
  try {
    const { voucherId } = req.params;
    const voucher = await Voucher.findById(voucherId);

    if (!voucher) {
      return res.status(404).json({ message: 'Voucher not found.' });
    }

    res.status(200).json(voucher);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Create a new voucher (Admin only)
export const createVoucher = async (req, res) => {
  try {
    const { name, quantity, discount, minPurchase, expired, isActive } = req.body;

    const voucher = new Voucher({
      name,
      quantity,
      discount,
      minPurchase,
      expired,
      isActive: isActive !== undefined ? isActive : true,
    });

    await voucher.save();
    res.status(201).json({ message: 'Voucher created successfully.', voucher });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Update voucher (Admin only)
export const updateVoucher = async (req, res) => {
  try {
    const { voucherId } = req.params;
    const { name, quantity, discount, minPurchase, expired, isActive } = req.body;

    const voucher = await Voucher.findById(voucherId);
    if (!voucher) {
      return res.status(404).json({ message: 'Voucher not found.' });
    }

    if (name) voucher.name = name;
    if (quantity) voucher.quantity = quantity;
    if (discount) voucher.discount = discount;
    if (minPurchase) voucher.minPurchase = minPurchase;
    if (expired) voucher.expired = expired;
    if (isActive !== undefined) voucher.isActive = isActive;

    await voucher.save();
    res.status(200).json({ message: 'Voucher updated successfully.', voucher });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Delete voucher (Admin only)
export const deleteVoucher = async (req, res) => {
  try {
    const { voucherId } = req.params;

    const voucher = await Voucher.findByIdAndDelete(voucherId);
    if (!voucher) {
      return res.status(404).json({ message: 'Voucher not found.' });
    }

    res.status(200).json({ message: 'Voucher deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Toggle voucher active status (Admin only)
export const toggleVoucherStatus = async (req, res) => {
  try {
    const { voucherId } = req.params;

    const voucher = await Voucher.findById(voucherId);
    if (!voucher) {
      return res.status(404).json({ message: 'Voucher not found.' });
    }

    voucher.isActive = !voucher.isActive;
    await voucher.save();

    res.status(200).json({ message: 'Voucher status toggled successfully.', voucher });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

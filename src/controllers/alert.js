import Alert from '../models/alert.js';
import User from '../models/user.js';

export const createAlert = async (req, res) => {
  const { userId, message, type } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found'});
    }

    const newAlert = new Alert({
      userId: userId,
      message: message,
      type: type,
    });

    await newAlert.save();

    return res.status(201).json({
      message: 'Alert created successfully',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating alert' });
  }
};

export const createAlertRole = async (req, res) => {
  const { role, message, type } = req.body;

  try {
    const validRoles = ['buyer', 'seller', 'admin'];
    if (!validRoles.includes(role)) {
      return res.status(404).json({ message: 'Role not found.'});
    }

    const users = await User.find({ role: role });
    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found.'});
    }

    const alerts = [];

    for (let user of users) {
      const newAlert = new Alert({
        userId: user._id,
        message: message,
        type: type,
      });

      await newAlert.save();
      alerts.push(newAlert);
    }

    return res.status(201).json({
      message: 'Alert created succesfully'
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error creating alert' });
  };
};

export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({ userId:req.user._id }).sort({ createdAt: -1 });

    if (!alerts.length) {
      return res.status(404).json({ message: 'No alerts found for this user.' })
    }

    return res.status(200).json(alerts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching alerts'});
  }
};

export const deleteAlert = async (req, res) => {
  try {
    const { alertId } = req.params;

    const alert = await Alert.findByIdAndDelete(alertId);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found.' });
    }

    return res.status(200).json({ message: 'Alert deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting alert' });
  }
};

export const deleteAllAlerts = async (req, res) => {
  try {
    const result = await Alert.deleteMany({ userId: req.user._id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No alerts found to delete.' });
    }

    return res.status(200).json({ message: `${result.deletedCount} alerts deleted successfully.` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting all alerts' });
  }
};

export const markAlertAsRead = async (req, res) => {
  try {
    const { alertId } = req.params;

    const alert = await Alert.findById(alertId);
    if (!alert) {
      return res.status(404).json({ message: "Alert not found." });
    }

    alert.isRead = true;
    await alert.save();

    res.status(200).json({ message: "Alert marked as read.", alert });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const markAllAlertsAsRead = async (req, res) => {
  try {
    const userId = req.user._id;

    const result = await Alert.updateMany(
      { userId, isRead: false }, 
      { $set: { isRead: true } } 
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "No unread alerts found." });
    }

    res.status(200).json({
      message: `${result.modifiedCount} alerts marked as read.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

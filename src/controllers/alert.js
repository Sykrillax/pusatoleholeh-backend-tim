import Alert from '../models/alert.js';

// Get all alerts for the logged-in user's role
export const getAlerts = async (req, res) => {
  try {
    const userRole = req.user.role; 
    const alerts = await Alert.find({
      $or: [
        { target: 'all' },
        { target: userRole },
      ],
    }).sort({ createdAt: -1 }); 

    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Create a new alert (broadcast to all or specific roles)
export const createAlert = async (req, res) => {
  try {
    const { message, type = 'info', target = 'all' } = req.body;

    const alert = new Alert({
      message,
      type,
      target,
    });

    await alert.save();
    res.status(201).json({ message: 'Alert created successfully.', alert });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Delete an alert
export const deleteAlert = async (req, res) => {
  try {
    const { alertId } = req.params;

    const alert = await Alert.findByIdAndDelete(alertId);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found.' });
    }

    res.status(200).json({ message: 'Alert deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Delete all alerts
export const deleteAllAlerts = async (req, res) => {
  try {
    const result = await Alert.deleteMany({});
    res.status(200).json({ message: `${result.deletedCount} alerts deleted successfully.` });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Mark an alert as read
export const markAlertAsRead = async (req, res) => {
  try {
    const { alertId } = req.params;

    const alert = await Alert.findById(alertId);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found.' });
    }

    alert.isRead = true;
    await alert.save();

    res.status(200).json({ message: 'Alert marked as read.', alert });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

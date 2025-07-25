// controllers/authController.js
const Landlord = require('../models/Landlord');

// Register Landlord
exports.registerLandlord = async (req, res) => {
  try {
    const { name, email, phone, password, nationalId } = req.body;

    // Check if landlord already exists
    const existing = await Landlord.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const landlord = new Landlord({ name, email, phone, password, nationalId });
    await landlord.save();

    res.status(201).json({ message: 'Landlord registered successfully', landlord });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

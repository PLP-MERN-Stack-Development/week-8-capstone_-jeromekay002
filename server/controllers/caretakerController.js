const Caretaker = require('../models/Caretaker');

// Create new caretaker
exports.registerCaretaker = async (req, res) => {
  const { name, phone, email, password, assignedProperty } = req.body;

  try {
    // Check for duplicate email
    const existing = await Caretaker.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Caretaker with this email already exists' });
    }

    // Create caretaker
    const caretaker = new Caretaker({
      name,
      phone,
      email,
      password,
      assignedProperties: [assignedProperty], // Store as array
    });

    await caretaker.save();
    res.status(201).json({ message: 'Caretaker registered successfully', caretaker });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all caretakers
exports.getAllCaretakers = async (req, res) => {
  try {
    const caretakers = await Caretaker.find();
    res.json({
      message: 'Caretakers retrieved successfully',
      caretakers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one caretaker by ID
exports.getCaretakerById = async (req, res) => {
  try {
    const caretaker = await Caretaker.findById(req.params.id);
    if (!caretaker) return res.status(404).json({ message: 'Caretaker not found' });

    res.json({
      message: 'Caretaker retrieved successfully',
      caretaker,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update caretaker
exports.updateCaretaker = async (req, res) => {
  try {
    const updated = await Caretaker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'Caretaker not found' });

    res.json({
      message: 'Caretaker updated successfully',
      caretaker: updated,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete caretaker
exports.deleteCaretaker = async (req, res) => {
  try {
    const deleted = await Caretaker.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Caretaker not found' });

    res.json({ message: 'Caretaker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

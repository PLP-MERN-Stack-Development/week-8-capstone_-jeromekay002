const Landlord = require('../models/Landlord');

// Create new landlord
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

// Get all landlords
exports.getAllLandlords = async (req, res) => {
    try {
        const landlords = await Landlord.find().populate('propertiesOwned');
        res.json(landlords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get one landlord
exports.getLandlordById = async (req, res) => {
    try {
        const landlord = await Landlord.findById(req.params.id).populate('propertiesOwned');
        if (!landlord) return res.status(404).json({ message: 'Landlord not found' });
        res.json(landlord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update landlord
exports.updateLandlord = async (req, res) => {
    try {
        const updated = await Landlord.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Landlord not found' });
        res.json({ message: 'Landlord updated', landlord: updated });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete landlord
exports.deleteLandlord = async (req, res) => {
    try {
        const deleted = await Landlord.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Landlord not found' });
        res.json({ message: 'Landlord deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

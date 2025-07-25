// routes/dashboard
const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
const Caretaker = require('../models/Caretaker');
const Property = require('../models/Property'); // Assuming you have this
const Rent = require('../models/Rent');         // If rent payments are stored

router.get('/stats', async (req, res) => {
    try {
        const totalTenants = await Tenant.countDocuments();
        const totalCaretakers = await Caretaker.countDocuments();
        const totalProperties = await Property.countDocuments();

        let totalRent = [{ total: 0 }]; // fallback value

        try {
            totalRent = await Rent.aggregate([
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]);
        } catch (err) {
            console.warn('Rent model not found or aggregation failed:', err.message);
        }

        res.json({
            tenants: totalTenants,
            caretakers: totalCaretakers,
            properties: totalProperties,
            rentCollected: totalRent[0]?.total || 0
        });
    } catch (error) {
        console.error('Stats fetch failed:', error);
        res.status(500).json({ error: 'Failed to fetch dashboard stats' });
    }
});

module.exports = router;

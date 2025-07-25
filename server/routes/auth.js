// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import models
const Landlord = require('../models/Landlord');
const Caretaker = require('../models/Caretaker');
const Tenant = require('../models/Tenant');

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check all roles
    const userRoles = [
      { model: Landlord, role: 'landlord' },
      { model: Caretaker, role: 'caretaker' },
      { model: Tenant, role: 'tenant' }
    ];

    for (const { model, role } of userRoles) {
      const user = await model.findOne({ email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
          { id: user._id, role },
          process.env.JWT_SECRET,
          { expiresIn: '1d' }
        );

        return res.json({ token, role, userId: user._id });
      }
    }

    res.status(400).json({ message: 'User not found' });

  } catch (error) {
    console.error('Login Error:', error); // Add this line
    res.status(500).json({ message: 'Server error', error: error.message });
  }

});

module.exports = router;

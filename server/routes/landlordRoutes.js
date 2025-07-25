const express = require('express');
const router = express.Router();
const landlordController = require('../controllers/landlordController');
const { authenticate, authorizeRoles } = require('../middlewares/authenticate');

// Public route
router.post('/register', landlordController.registerLandlord);

// Protected routes
router.get('/', landlordController.getAllLandlords);
// router.get('/', authenticate, authorizeRoles('admin'), landlordController.getAllLandlords);
router.get('/:id', authenticate, authorizeRoles('admin', 'landlord'), landlordController.getLandlordById);
router.put('/:id', authenticate, authorizeRoles('landlord'), landlordController.updateLandlord);
router.delete('/:id', authenticate, authorizeRoles('admin'), landlordController.deleteLandlord);

module.exports = router;

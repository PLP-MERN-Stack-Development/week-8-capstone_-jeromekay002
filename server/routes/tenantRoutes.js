const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const { authenticate, authorizeRoles } = require('../middlewares/authenticate');

// Public route
router.post('/register', tenantController.registerTenant);

// Protected routes
router.get('/', tenantController.getAllTenants);
// router.get('/', authenticate, authorizeRoles('admin', 'caretaker'), tenantController.getAllTenants);
router.get('/:id', authenticate, authorizeRoles('admin', 'tenant'), tenantController.getTenantById);
router.put('/:id', authenticate, authorizeRoles('tenant'), tenantController.updateTenant);
router.delete('/:id', authenticate, authorizeRoles('admin'), tenantController.deleteTenant);

module.exports = router;

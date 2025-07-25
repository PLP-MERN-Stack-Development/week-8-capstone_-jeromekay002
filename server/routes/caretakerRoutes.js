const express = require('express');
const router = express.Router();
const caretakerController = require('../controllers/caretakerController');
const { authenticate, authorizeRoles } = require('../middlewares/authenticate');

router.post('/register', caretakerController.registerCaretaker);

// ✅ Protect these routes
router.get('/', caretakerController.getAllCaretakers);
// router.get('/', authenticate, authorizeRoles('admin', 'landlord'), caretakerController.getAllCaretakers);
router.get('/:id', authenticate, caretakerController.getCaretakerById);
router.put('/:id', authenticate, caretakerController.updateCaretaker);
router.delete('/:id', authenticate, authorizeRoles('admin'), caretakerController.deleteCaretaker);

module.exports = router;

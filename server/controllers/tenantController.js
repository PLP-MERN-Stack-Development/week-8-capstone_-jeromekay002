const Tenant = require('../models/Tenant');

// Create new tenant
exports.registerTenant = async (req, res) => {
  try {
    const { name, email, phone, password, nationalId, apartment } = req.body;

    const existing = await Tenant.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const tenant = new Tenant({ name, email, phone, password, nationalId, apartment });
    await tenant.save();

    res.status(201).json({ message: 'Tenant registered successfully', tenant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tenants
exports.getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.json({
      message: 'Tenants retrieved successfully',
      tenants,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one tenant
exports.getTenantById = async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id);
    if (!tenant) return res.status(404).json({ message: 'Tenant not found' });

    res.json({
      message: 'Tenant retrieved successfully',
      tenant,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update tenant
exports.updateTenant = async (req, res) => {
  try {
    const updated = await Tenant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'Tenant not found' });

    res.json({
      message: 'Tenant updated successfully',
      tenant: updated,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete tenant
exports.deleteTenant = async (req, res) => {
  try {
    const deleted = await Tenant.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tenant not found' });

    res.json({ message: 'Tenant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

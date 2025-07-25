// models/Rent.js
const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tenant',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  datePaid: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Rent', RentSchema);

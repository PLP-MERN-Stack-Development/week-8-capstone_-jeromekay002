const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['apartment', 'house', 'bedsitter'],
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['occupied', 'vacant'],
    default: 'vacant',
  },
  landlordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Landlord',
  },
  caretakerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Caretaker',
  },
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);

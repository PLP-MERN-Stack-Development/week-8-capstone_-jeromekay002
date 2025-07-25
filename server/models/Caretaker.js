const mongoose = require('mongoose');

const caretakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Caretaker name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
      match: [/^07\d{8}$/, 'Please enter a valid Kenyan phone number'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    assignedProperties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property', // optional, in case you link caretakers to property documents
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Caretaker', caretakerSchema);

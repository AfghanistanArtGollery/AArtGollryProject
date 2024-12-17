const mongoose = require('mongoose');
require('./User')
require('./ArtWork')
const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    artwork_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ArtWork',
      required: true,
    },

    status: {
      type: String,
      enum: ['pending', 'completed', 'canceled'],
      default: 'pending',
    },

    payment_details: {
      type: Object,
      required: true,
    },

    order_date: {
      type: Date,
      default: Date.now,
    },
    // Billing details: 
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street_address: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    order_notes: {
      type: String,
      default: '',
    },


  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);

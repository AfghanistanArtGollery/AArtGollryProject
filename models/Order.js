const mongoose = require('mongoose');
require('./User')
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
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);

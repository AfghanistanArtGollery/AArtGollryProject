const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Style || mongoose.model('Style', styleSchema);
module.exports = model;

const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Material || mongoose.model('Material', materialSchema);
module.exports = model;

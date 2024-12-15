const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Subject || mongoose.model('Subject', subjectSchema);
module.exports = model;

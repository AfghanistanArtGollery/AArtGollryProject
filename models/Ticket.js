const mongoose = require("mongoose");
require("./Department");  // Ensure these models are correctly set up
require("./SubDepartment");
require("./User");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    subDepartment: {
      type: mongoose.Types.ObjectId,
      ref: "SubDepartment",  // Match the model name exactly
      required: true,
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    hasAnswer: {
      type: Boolean,
      default: false,
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    mainTicket: {
      type: mongoose.Types.ObjectId,
      ref: "Ticket",
      required: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Ensure the model is only created once
const TicketModel = mongoose.models.Ticket || mongoose.model("Ticket", schema);

export default TicketModel;

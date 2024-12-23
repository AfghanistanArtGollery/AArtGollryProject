const mongoose = require("mongoose");
require("./User");
require("./ArtWork");

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    artWorkID: {
      type: mongoose.Types.ObjectId,
      ref: "ArtWork",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Wishlist || mongoose.model("Wishlist", schema);

export default model;

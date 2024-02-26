const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Wish = mongoose.model("Wish", wishSchema);

module.exports = Wish;

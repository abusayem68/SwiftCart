const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

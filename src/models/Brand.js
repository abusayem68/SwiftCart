const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, unique: true, required: true },
    brandImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;

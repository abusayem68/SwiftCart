const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, unique: true, required: true },
    categoryImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

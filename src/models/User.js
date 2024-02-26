const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    otp: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "PLEASE ADD THE USER NAME"],
    },
    email: {
      type: String,
      require: [true, "PLEASE ADD THE USER MAIL ADDRESS"],
      unique: [true, "EMAIL ADDRESS ALREADY TAKEN"],
    },
    password: {
      type: String,
      require: [true, "PLEASE ASS THE USER AND PASSWORD"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

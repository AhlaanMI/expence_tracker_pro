const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is Required"],
  },

  balance: {
    type: Number,
    default: 0,
  },
});

const UsersModel = mongoose.model("Users", usersSchema);

module.exports = UsersModel;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const UsersModel = mongoose.model("Users");

  const { email, password } = req.body;

  const getUser = await UsersModel.findOne({
    email: email,
  });

  if (!getUser) throw "User not found";

  const comparePassword = await bcrypt.compare(password, getUser.password);

  if (!comparePassword) throw "Password is incorrect";

  console.log(getUser);

  //successful response
  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
  });
};

module.exports = login;

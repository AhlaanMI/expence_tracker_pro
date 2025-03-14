const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const login = async (req, res) => {
  const UsersModel = mongoose.model("Users");

  const { email, password } = req.body;

  const getUser = await UsersModel.findOne({
    email: email,
  });

  if (!getUser) throw "User not found";

  const comparePassword = await bcrypt.compare(password, getUser.password);

  if (!comparePassword) throw "Password is incorrect";

  const accessToken = jsonwebtoken.sign(
    { _id: getUser._id, name: getUser.name },
    process.env.jwt_salt
  );

  //successful response
  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
    accessToken: accessToken,
  });
};

module.exports = login;

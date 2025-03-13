const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const UsersModel = mongoose.model("Users");

  const { email, password, confirm_password, name, balance } = req.body;

  //validations
  if (!name) throw "Name must be provided !";
  if (!email) throw "Email must be provided!";
  if (!password) throw "Email must be provided!";
  if (password.length < 5) throw "Email must be 5 characters long!";
  if (password !== confirm_password) throw "Passwords do not match!";

  const getDuplicateEmail = await UsersModel.findOne({ email: email });

  if (getDuplicateEmail) throw "This email already exists";

  const hashedPassword = await bcrypt.hash(password, 10);

  await UsersModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });

  res.status(200).json({
    status: "User register successfully",
  });
};

module.exports = register;

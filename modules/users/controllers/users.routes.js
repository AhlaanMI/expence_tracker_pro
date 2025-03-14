const express = require("express");
const register = require("./register");
const login = require("./login");

const userRoutes = express.Router();

//Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = userRoutes;

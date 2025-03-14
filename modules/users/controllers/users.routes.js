const express = require("express");
const register = require("./register");
const login = require("./login");
const userDashbord = require("./userDashbord");

const userRoutes = express.Router();

//Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);

userRoutes.get("/dashboard", userDashbord);

module.exports = userRoutes;

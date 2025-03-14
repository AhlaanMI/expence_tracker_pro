const express = require("express");
const register = require("./register");
const login = require("./login");
const userDashbord = require("./userDashbord");
const auth = require("../../../middleware/auth");

const userRoutes = express.Router();

//Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);

userRoutes.use(auth);

// Protected routes (below this middleware, all routes are protected)
userRoutes.get("/dashboard", userDashbord);

module.exports = userRoutes;

const express = require("express");
const router = express.Router();
const { SignUp, LogIn, LogOut } = require("../controller/auth.controller.js");

// Use POST for registration and login
router.post("/signup", SignUp);
router.post("/login", LogIn);
router.post("/logout", LogOut);
module.exports = router;
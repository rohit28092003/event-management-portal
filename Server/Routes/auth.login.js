const express = require("express");
const router = express.Router();

// Path: auth/login.js
const login = require("../Controllers/auth.user.login.js"); // Update the path to match the correct casing
router.post("/login", login);

module.exports = router;
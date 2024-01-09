const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.send("Login successful!");
    } else {
        res.send("Invalid credentials!");
    }
}
const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user.model.js");
const router = express.Router();

exports.login = (req, res) => {
    try
    {
        const { username, password } = req.body;
        if(User.findOne({username:username,password:password})) {
        res.send("Login successful!");
    } else {
        res.send("Invalid credentials!");
    }}
    catch(err)
    {
        console.log(err);
    }
};
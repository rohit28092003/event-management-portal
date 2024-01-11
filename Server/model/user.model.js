const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    name: String,
    position : String,
    heirarchy : String, // 1 = EB, 2 = OEC, 3 = OC, 4 = Core, 5 = Member
    password: String
});

module.exports = mongoose.model("User", userSchema);
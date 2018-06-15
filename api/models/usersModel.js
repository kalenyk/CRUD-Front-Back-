"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Users", UsersSchema);
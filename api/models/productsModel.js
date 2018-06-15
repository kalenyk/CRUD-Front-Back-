"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let ProductsSchema = new Schema({
    name: {
        type: String,
        Required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required:true
    }
});


module.exports = mongoose.model("Products", ProductsSchema);
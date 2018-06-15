"use strict";

const mongoose = require("mongoose"),
    User = mongoose.model("Users"),
    jwt = require("jsonwebtoken");


exports.getAllUsers = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.createNewUser = function (req, res) {
    let new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.getOneUser = function (req, res) {
    User.findOne(req.body, function (err, user) {
        if (!err && user !== null && req.body.name && req.body.password) {
            jwt.sign({user: req.body.name}, "secretkey", {expiresIn: "30m"}, (err, token) => {
                if (err) {
                    return res.sendStatus(401);
                }
                return res.status(200).send({token: token});
            });
        }
        else {
            res.sendStatus(401);
        }
    });
};

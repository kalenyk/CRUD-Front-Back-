"use strict";

const mongoose = require("mongoose"),
    Product = mongoose.model("Products"),
    jwt = require("jsonwebtoken");


exports.getAllProducts = function (req, res) {
    Product.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.createNewProduct = function (req, res) {
    const bearerHeader = req.headers["authorization"];
    let token = "";
    if (bearerHeader && bearerHeader.length > 7) {
        const bearer = bearerHeader.split(" ");
        token = bearer[1];
    }
    else {
        res.sendStatus(401);
    }
    jwt.verify(token, "secretkey", (err, tokenData) => {
        if (err) {
            res.sendStatus(401);
        }
        else {
            let new_product = new Product(req.body);
            new_product.createdBy = tokenData.user;
            new_product.save(function (err, product) {
                if (err) {
                    return   res.send(err);
                }
                return res.json({status:200});
            });
        }
    });
};

exports.getOneProduct = function (req, res) {
    Product.findById(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.deleteProduct = function (req, res) {
    const bearerHeader = req.headers["authorization"];
    let token = "";
    if (bearerHeader && bearerHeader.length > 7) {
        const bearer = bearerHeader.split(" ");
        token = bearer[1];
    }
    else {
        return res.sendStatus(401);
    }
    jwt.verify(token, "secretkey", (err, tokenData) => {
        if (err) {
            return res.sendStatus(401);
        }
        else {
            Product.remove({
                _id: req.params.id
            }, function (err, product) {
                if (err) {
                    return res.json({status:404});
                }
                else {
                    return res.json({status:200});
                }
            });
        }
    });

};

exports.deleteAllProducts = function (req, res) {
    const bearerHeader = req.headers["authorization"];
    let token = "";
    if (bearerHeader && bearerHeader.length > 7) {
        const bearer = bearerHeader.split(" ");
        token = bearer[1];
    }
    else {
        return res.sendStatus(401);
    }
    jwt.verify(token, "secretkey", (err, tokenData) => {
        if (err) {
            return res.sendStatus(401);
        }
        else {
            Product.remove({},function (err, db) {
                if (err) {
                    return res.send({status:404});
                }
                else {
                    return res.send({status:200});
                }
            });
        }
    });

};

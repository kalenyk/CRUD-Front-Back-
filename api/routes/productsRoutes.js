"use strict";

module.exports = function (app) {
    const products = require("../controllers/productsController");

    app.route("/products")
        .get(products.getAllProducts)
        .delete(products.deleteAllProducts);

    app.route("/product/:id")
        .get(products.getOneProduct)
        .delete(products.deleteProduct);

    app.route("/product/new")
        .post(products.createNewProduct);
};

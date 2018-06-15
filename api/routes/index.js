const productsRoutes = require("./productsRoutes");
const usersRoutes = require("./usersRoutes");
module.exports = function (app) {
    productsRoutes(app);
    usersRoutes(app);
};
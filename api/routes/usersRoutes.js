"use strict";

module.exports = function (app) {
    const users = require("../controllers/usersController");

    app.route("/users")
        .get(users.getAllUsers)
        .post(users.createNewUser);

    app.route("/login_check")
        .post(users.getOneUser);
};

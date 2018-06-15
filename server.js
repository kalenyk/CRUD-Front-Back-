const express = require("express"),
    app = express(),
    port = 8000,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    cors = require("cors");

require("./api/models/productsModel");
require("./api/models/usersModel");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin@ds253959.mlab.com:53959/tomnium");
app.use(cors());
app.use(bodyParser.urlencoded({limit: "50mb",extended: true}));
app.use(bodyParser.json({limit: "50mb"}));


const routes = require("./api/routes/index");
routes(app);



app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + " not found"});
});


console.log("Application listen:  " + port);
app.listen(port);


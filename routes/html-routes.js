let express = require("express");
var Burger = require("../models/burger.js");


// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        Burger.findAll({}).then(function(results) {
            res.json(results);
        });
    });

}
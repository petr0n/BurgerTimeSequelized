
let db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
            let hbsObject = {
                burgers: results
            };
            console.log(hbsObject);
            return res.render("index", hbsObject);
        });
    });

}
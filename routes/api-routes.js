let db = require("../models");

module.exports = function(app) {

    app.post('/api/burger', function(req, res) {
        db.Burger.create({
            burgerName: req.body.burgerName,
            devoured: req.body.devoured
        }).then(function(results) {
            res.end();
        });
    });
    
    app.put('/api/burger', function(req, res) {
        db.Burger.update({ devoured: req.body.devoured },{
			where: {
				id: req.body.id
			}
		}).then(function(results) {
			res.json(results);
			res.end();
		});
    });
    
    app.delete('/api/burger/:id',  function(req, res) {
        db.Burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.end();
		});
    });
    
}
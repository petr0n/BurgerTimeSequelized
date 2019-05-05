let express = require('express');
let router = express.Router();

let Burger = require("../models/")["Burger"];

router.get('/', function(req, res) {
  Burger.findAll({}).then(function(data) {
    let hbsObject = {
        burgers: data
    };
    return res.render("index", hbsObject);
  });
});

router.post('/api/burger', function(req, res) {
  Burger.create({
    burgerName: req.body.burgerName,
    devoured: req.body.devoured
  }).then(function(results) {
      res.end();
  });
});

router.put('/api/burger', function(req, res) {
  let devoured = req.body.devoured ? true : false;
  Burger.update({ 
    devoured: devoured 
  },{
    where: {
      id: req.body.id
    }
  }).then(function(results) {
    res.json(results);
    res.end();
  });
});

router.delete('/api/burger/:id',  function(req, res) {
  Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(results) {
    res.end();
  });
});


module.exports = router;

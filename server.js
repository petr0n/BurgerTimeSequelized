let express = require('express');
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 3000;

let app = express();

let db = require("./models");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// let routes = require('./controllers/burgerController.js');
// app.use(routes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
  });
});

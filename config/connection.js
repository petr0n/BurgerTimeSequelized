// Set up MySQL connection.
let mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) { 
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "o7kLUrUb18gdzQzu",
    database: "burgerTimeDb"
  });
}
  
// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

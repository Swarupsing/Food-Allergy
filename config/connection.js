// Set up MySQL connection.
var mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config()

// Jaws database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 8889, //change for Mac
    user: "root",
    password: "root",
    database: "allergenius_db"
  });

}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
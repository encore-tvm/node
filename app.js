const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'mysqldb.citiucgqt1bu.ap-southeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'core2000',
  database: 'studentdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('DB Connected!');
});

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sunil John application." });
});

// set port, listen for requests
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Server is running on port 3000.");
});

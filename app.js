// REST API for student enrolment project for the school XYZ
// Datastore in AWS RDS-MySQL
// Developed by SJ
// Date : 14-11-2020

const mysql = require('mysql');
const express = require("express");

const bodyParser = require("body-parser");

var app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// Connect to AWS RDS MySQL DB
const connection = mysql.createConnection({
    host: 'mysqldb.citiucgqt1bu.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'core2000',
    database: 'studentdb'
});

connection.connect((err) => {
    if (err) throw err;
        console.log('DB MySQL Sucessfully Connected!');
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to REST API Students Enrolment System" });
});

// set port 3000, listen for requests
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server is running on port 3000.");
});

// Get all students details from database
app.get('/students',(req, res)=> {
    connection.query('select * from students',(err, rows, fields)=>{
        if(!err) 
            res.send(rows);
        else
            console.log(err);
    })
});

// Get a student details from DB
app.get('/students/:id',(req, res)=> {
    connection.query('select * from students where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

// Delete a student details from DB
app.delete('/students/:id',(req, res)=> {
    connection.query('delete from students where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    })
});


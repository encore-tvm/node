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
    //res.json({ message: "Welcome to REST API Students Enrolment System  <br/> Usage :" });
    res.send( '<h2> Hello Welcome to my Code Pipeline </h2> <br/> Use /students to get full list of studnets <br/> /students/id? to get one student details, eg: /students/1001 ' );
});

// set port 3000, listen for requests
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server is running on port 3000.");
});

// // Rest API to get all records from Database
app.get('/students',(req, res)=> {
    connection.query('select * from students',(err, rows, fields)=>{
    if(!err) 
        res.send(rows);
    else
        console.log(err);
    })
});

//Rest API to get a single record
app.get('/students/:id',(req, res)=> {
    connection.query('select * from students where id =?',[req.params.id],(err, rows, fields)=>{
    if(!err)
        res.send(rows);
    else
        res.send(err);
        console.log(err);
    })
});

//Rest API to create a new record into mysql database
app.post('/students',(req, res)=> {
    var postData = req.body;
    connection.query('INSERT INTO students SET ?', postData, (err, rows, fields)=>{
    if(!err)
        res.end(JSON.stringify(rows));
    else
        //Return Error message
        res.send(err);
        console.log(err);
    })
});

//rest api to update record into mysql database
app.put('/students', (req, res) => {
    connection.query('UPDATE `students` SET `class`=? where `id`=?', [req.body.class, req.body.id], (err, rows, fields)=>{
        if (!err) 
            res.end(JSON.stringify(rows)); 
        else
            res.send(err);
            console.log(err);
     });
 });

//rest api to delete record from mysql database
app.delete('/students/:id',(req, res)=> {
    var _id = req.params.id
    connection.query('delete from students where id =?',[req.params.id],(err, rows, fields)=>{
    if(!err)
        res.send ('Deleted successfully - ID:'+ _id );
    else
        console.log(err);
    })
});


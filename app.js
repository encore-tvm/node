const mysql = require('mysql');
const express = require('express');

var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

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

const port = process.env.port || 3000;
app.listen(port,()=>console.log('Express server is running at port: 3000'));

// Get all students
app.get('/students',(req, res)=> {
    connection.query('select * from students',(err, rows, fields)=>{
        if(!err)
                res.send(rows);
        else
            console.log(err);
    })
});

// Get a student details
app.get('/students/:id',(req, res)=> {
    connection.query('select * from students where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

// Delete a student details
app.delete('/students/:id',(req, res)=> {
    connection.query('delete from students where id =?',[req.params.id],(err, rows, fields)=>{
        if(!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    })
});

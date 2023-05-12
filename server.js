const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5500;
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
// const db = require('./db');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();


app.get('/api/customers', (req, res)=>{
    connection.query("select * from CUSTOMER WHERE isDeleted = 0", (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

const multer = require('multer');
const { getDefaultSettings } = require('http2');
const upload = multer({dest: './upload'})
const sharp = require("sharp");



app.use('/schedule', express.static('./upload'));
app.post('/api/customers', upload.single('schedule'), (req,res) => {
    let sql = "INSERT INTO CUSTOMER VALUES (null,?, ?, ?, ?, ?,?,0,now())";
    let schedule = '/schedule/' + req.file.filename;
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let mbti = req.body.mbti;
    let ktalk = req.body.ktalk;
    let params = [schedule,name, age, gender, mbti, ktalk];
    connection.query(sql,params,  (err, data) => {
        if(!err) {
            res.send(data);
 
        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.delete('/api/customers/:id', (req,res) =>{
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql,params,  (err, data) => {
        if(!err) {
            res.send(data);
 
        } else {
            console.log(err);
            res.send(err);
        }
    })
})
app.listen(port, () =>console.log(`Listening on port ${port}`));
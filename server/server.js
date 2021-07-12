var express = require('express');
//var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
const router = express.Router(); 
const mysql = require('mysql');
var nodemailer = require('nodemailer');
var order_number;

var app = express();

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;


// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nhs'
});
// connect to database
dbConn.connect(); 

/////////////sign in
app.post('/sign', function (req, res) {
    var postData  = req.body;
    var pass= postData.Password;
    var username= postData.Email;
    console.log(pass +"      "+username);
    dbConn.query('SELECT Email,Password FROM user WHERE Email="'+username+'" and Password="'+pass+'" ', function (error, results, fields) {
     if (error) {
       throw error;
         var r="login";
         res.end(JSON.stringify(r));
  }
  else if (results.length>0) {
    console.log("Correct Password");
      var r="home";
    res.end(JSON.stringify(r));
  }
  else{
    console.log("Wrong Password");
    var r="passwordf";
    res.end(JSON.stringify(r));
  }
   });
  });
  // Retrieve all Data
app.get('/allData', function (req, res) {
    dbConn.query('SELECT * FROM data', function (error, results, fields) {
        if (error){
          throw error;
  
        } 
        else{
          return res.send( results);
  
        }
        
    });
  });
  app.post('/adds', function (req, res) {
    var postData  = req.body;
    var email= postData.Email;
  
    console.log(postData);
    dbConn.query('INSERT INTO data SET ?', postData, function (error, results, fields) {
     if (error) {
       throw error;
     }
     else{
          res.end(JSON.stringify(results));
     }
   });
  });
  app.post('/update', function (req, res) {
    var postData  = req.body;
    var EmployeeNumber=postData.EmployeeNumber;
    var Course=postData.Course;
    var PassMark=postData.PassMark;
    var DateOfExam=postData.DateOfExam;
    var DueForExam=postData.DueForExam;
  
    dbConn.query('UPDATE data SET Course="'+Course+'",PassMark="'+PassMark+'",DateOfExam="'+DateOfExam+'",DueForExam="'+DueForExam+'" WHERE EmployeeNumber="'+EmployeeNumber+'" ', function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
  });
  app.post('/updateP', function (req, res) {
    var postData  = req.body;
    var EmployeeNumber=postData.EmployeeNumber;
    var Password=postData.Password;

    dbConn.query('UPDATE user SET Password="'+Password+'" WHERE EmployeeNumber="'+EmployeeNumber+'" ', function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
  });


  app.get('/allPD/:EmployeeNumber', function (req, res) {
    var v=req.params.EmployeeNumber;
    console.log(v);
   
    dbConn.query('SELECT * FROM data WHERE Employeenumber="'+v+'" ', function (error, results, fields) {
        if (error){
          throw error;
  
        } 
        else{
          return res.send( results);
  
        }
        
    });
  });



  app.get('/note/:Email', function (req, res) {
    var v=req.params.Email;
    console.log(v);
   
   var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'richardchifamba4@gmail.com',
              pass: 'richarD*1997'
            }
          });
          var mailOptions = {
            from: 'richardchifamba4@gmail.com',
            to: v,
            subject: 'NHS- DUE FOR RETRAINING',
            text: 'Good day, Please check your training status from the NHS Training Management System.'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.end(JSON.stringify("succesfull"));
            }
          });
  });




















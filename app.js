var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();
var router = express.Router();
var login = require("./routes/login");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/users', login);

app.get('/', function (req, res) {
   res.send('Hello World');
});


app.post("/signUp", function(re, rea){
    res.status(200).send({otp:"123"});
});

var server = app.listen(8088, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});

mongoose.connect('mongodb://localhost/smartShop');
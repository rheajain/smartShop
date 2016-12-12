var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();
var router = express.Router();
var login = require("./routes/login");
var mall = require("./routes/mall");
var shop = require("./routes/shop");
var product = require("./routes/product");
var Customer = require("./schemas/customer");
var search = require("./routes/search");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/search', search);
app.use('/product', product);
app.use('/shop', shop);

app.use('/login', login);
//app.use('/users', users);

app.get("/signUp", function(req, res){
    res.status(200).send({otp:"123"});
});

app.post("/register", function (req, res) {
    console.log("came here");
    if( req.body.phoneNo){
        var person = new Customer(req.body);
            // Customer.create(person, function(err, response){
            //     if(err){
            //         console.log(err);
            //         res.status(400).send(err);
            //     } else{
            //         console.log(req.body);
            //         res.send(response);
            //     }
            // });
            console.log(person);
            Customer.create(person).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
    } else {
        res.status(400).send("Bad request");
    }
});

var server = app.listen(8080,'0.0.0.0',function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});

mongoose.connect('mongodb://localhost/smartShop');
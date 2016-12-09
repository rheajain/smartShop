var express = require('express');
var router = express.Router();
var app = require('../app');
var customer = require('../schemas/customer');

router.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        console.log("Came to this page");
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
        var person = new customer(req.body);
        customer.create(req.body, function(err, r){
            if(err){
                console.log(err);

            } else{
                console.log(req.body);
                console.log(r);
            }
        });
    });

module.exports =router;
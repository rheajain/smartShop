var express = require('express');
var router = express.Router();
var app = require('../app');
var Customer = require('../schemas/customer');

router.route('/user')

    .get(function(req, res) {
        //dump all users
    Customer.find().exec().then( function(customers){
        res.send(customers);
    }).error( function(err){
        res.status(400).send(err);
    });
        
    })

    .put(function(req, res) {
        res.send('processing the login form!');
        if(req.body){
            //var person = new Customer(req.body);
            Customer.create(req.body, function(err, response){
                if(err){
                    console.log(err);
                } else{
                    console.log(req.body);
                    res.send(response);
                }
            });
        } else{
            res.status(400).send("No details found.");
        }
    });

module.exports = router;
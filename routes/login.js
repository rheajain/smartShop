var express = require('express');
var router = express.Router();
var app = require('../app');
var Customer = require('../schemas/customer');
var mongoose = require('mongoose');

router.route('/')

    // .get(function(req, res) {
    //     console.log("Came to this page");
    //     res.send('this is the login form');
    // })

    .post(function(req, res) {
        if(req.body){
            Customer.findOne({ phoneNo : req.body.phoneNo}).exec().then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        } else{
            res.status(404).send("No details found.");
        }    
    });

module.exports = router;
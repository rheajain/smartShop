var express = require('express');
var router = express.Router();
var app = require('../app');
var Vendor = require('../schemas/vendor');

router.get("/search", function(req, res) {
    console.log("Searching vendor");
    Vendor.find({name :req.query.name}).exec().then( function(result){
        if(result){
            res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.get("/:id", function(req, res) {
    console.log("Getting information of vendor with id- ", req.params.id);
    Vendor.findById(req.params.id).exec().then( function(result){
        if(result){
            res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.route('/')

    .get(function(req, res){
        //dump all vendors
        Vendor.find().exec().then( function(result){
            if(result){
                res.send(result);
            } else{
                res.status(404).send("Resource not found.");
            }
        }).catch( function(err){
            res.status(400).send(err);
        });
    })

    .post(function(req, res) {
        console.log('Creating a new vendor');
        if(req.body){
            var vendor = new Vendor(req.body);
            Vendor.create(vendor).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        } 
    });     


module.exports = router;
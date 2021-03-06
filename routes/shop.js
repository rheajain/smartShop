var express = require('express');
var router = express.Router();
var app = require('../app');
var mongoose = require('mongoose');
var Shop = require('../schemas/shop');


router.get("/search", function(req, res) {
    console.log("Searching shop");
    Shop.find({name :req.query.name}).exec().then( function(result){
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
    console.log("Getting information of shop with id- ", req.params.id);
    Shop.findById(req.params.id).exec().then( function(result){
        if(result){
            res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.get("/del/:id", function(req, res) {
    console.log("Getting information of shop with id- ", req.params.id);
    Shop.remove({_id :req.params.id}).exec().then( function(result){
        if(result){
            res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.post("/test", function(req, res){
    
});

router.route('/')

    .get(function(req, res){
        //dump all shops
        Shop.find().exec().then( function(result){
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
        console.log('Creating a new shop');
        if(req.body){
            req.body.products = req.body.products.map( function(p){
                return mongoose.Types.ObjectId(p);
            });
            var shop = new Shop(req.body);
            Shop.create(shop).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        }      
    });

module.exports =router;
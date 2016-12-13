var express = require('express');
var router = express.Router();
var app = require('../app');
var mongoose = require('mongoose');
var Product = require('../schemas/product');

router.get("/search", function(req, res) {
    console.log("Searching product");
    Product.find({name :req.query.name}).exec().then( function(result){
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
    console.log("Getting information of product with id- ", req.params.id);
    Product.findById(req.params.id).exec().then( function(result){
        if(result){
            res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.put("/:id", function(req, res) {
    console.log("Getting information of product with id- ", req.params.id);
    Product.findById(req.params.id).exec().then( function(result){
        if(result){
            result.image = req.query.image;
            result.save( function (err) {
                if(!err){
                    res.send(result);
                } else{
                    res.status(400).send("Bad");
                }
            })
            //res.send(result);
        } else{
            res.status(404).send("Resource not found.");
        }
    }).catch( function(err){
        res.status(400).send(err);
    });
});

router.route('/')

    

    .get(function(req, res){
        //dump all products
        Product.find().exec().then( function(result){
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
        console.log('Creating a new product');
        if(req.body){
            if(req.body.comesUnder){
                req.body.comesUnder = mongoose.Types.ObjectId(req.body.comesUnder);
            }
            var product = new Product(req.body);
            console.log(product);
            Product.create(product).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        }      
    })


module.exports =router;
var express = require('express');
var router = express.Router();
var app = require('../app');
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
            var product = new Product(req.body);
            Product.create(product).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        }      
    })


module.exports =router;
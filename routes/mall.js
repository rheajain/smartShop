var express = require('express');
var router = express.Router();
var app = require('../app');
var Mall = require('../schemas/mall');

router.get("/search", function(req, res) {
    console.log("Searching mall");
    Mall.find({name :req.query.name}).exec().then( function(result){
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
    console.log("Getting information of mall with id- ", req.params.id);
    Mall.findById(req.params.id).exec().then( function(result){
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
        //dump all malls
        Mall.find().exec().then( function(result){
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
        console.log('Creating a new mall');
        if(req.body){
            var mall = new Mall(req.body);
            Mall.create(mall).then(function(result){
                res.send(result);
            }).catch( function(e){
                res.status(400).send(e);
            });
        }      
    })

    /*.put("/:id", function(req, res){

        res.send();
    })*/

module.exports =router;
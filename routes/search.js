var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
var Shop = require('../schemas/shop');
var Mall = require('../schemas/mall');
var Product = require('../schemas/product');
const Geo = require('geo-nearby');

//var loc = mongoose.Schema.Types.Point;

// const data = [
//   [-35.30278, 149.14167, 'Canberra'],
//   [-33.86944, 151.20833, 'Sydney'],
//   [-37.82056, 144.96139, 'Melbourne'],
//   [-34.93333, 138.58333, 'Adelaide'],
//   [-27.46778, 153.02778, 'Brisbane'],
//   [-31.95306, 115.85889, 'Perth']
// ];



router.get("/nearby", function(req, res){
    //if(loc){
        // var dataSet = [
        //     { i: 'Perth',     g: 3149853951719405 },
        //     { i: 'Adelaide',  g: 3243323516150966 },
        //     { i: 'Melbourne', g: 3244523307653507 },
        //     { i: 'Canberra',  g: 3251896081369449 },
        //     { i: 'Sydney',    g: 3252342838034651 },
        //     { i: 'Brisbane',  g: 3270013708086451 },
        //     { i: 'Sydney',    g: 3252342838034651 }
        // ];  
        // var geo = new Geo(dataSet);
        // var a = geo.nearBy(-33.87, 151.2, 5000);
        // console.log(a);

const data = [
    [12.933192, 77.612205, 'Big bazaar'],
    [12.933579, 77.612419, 'Shopers Stop'],
    [12.934029, 77.611175, 'More supermarket'],
    [12.934298, 77.610859, 'KFC'],
    [12.934570, 77.611771, 'Westside'],
    [12.934560, 77.611288, 'The Forum'],
    [12.934445, 77.613434, 'Gramin'],
    [12.935020, 77.608799, 'Punjabi by Nature'],
    [12.936808, 77.610441, 'Start Bazaar'],
    [12.935177, 77.613491, 'Startbucks'],
    [12.933823, 77.612300, 'Bata'],
    [12.934215, 77.611195, 'Puma'],
    [12.935328, 77.612847, "Baby's Dayout"],
    [12.934680, 77.612455, 'State Bank ATM'],
    [12.934680, 77.613496, 'Citi Bank ATM'],
    [12.935213, 77.614483, 'ICICI Bank'],
    [12.936531, 77.616049, 'Sapna Book House'],
    [12.935595, 77.614385, 'Bowling Machine and ames'],
    [12.933934, 77.621245, 'Escape room'],
    [12.930758, 77.622640, 'Cafe coffe Day'],
    [12.937575, 77.628006, 'Oasis mall']

];
        const dataSet = Geo.createCompactSet(data);
        const geo = new Geo(dataSet, { sorted: true });
 
        console.log(geo.nearBy(12.934607, 77.625298, 2000));
        res.send(geo.nearBy(12.934607, 77.625298, 2000));
    //}
});

router.post('/route', function(req, res){
    if(req.body.list){
        
    } else{
        res.status(404).send("Wishlist not found.");
    }
});

router.get('/:keyword', function(req, res){
    if(req.params.keyword!==""){
        var promise1 = Product.find({name: req.params.keyword}).exec();
        var promise2 = Mall.find({name: req.params.keyword}).exec();
        var promise3 = Shop.find({name : req.params.keyword}).exec();
        Promise.all([promise1, promise2, promise3]).then( function(result){
            res.send(result);
        }).catch( function(err){
            res.status(400).send(err);
        })
    }
});

module.exports = router;
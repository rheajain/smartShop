var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GeoJSON = require('mongoose-geojson-schema');

var shop = new Schema({
  id:  String,
  name: String,
  emailId:   { type: String, unique : true},
  closingTime : String,
  OpeningTime : String,
  rating : Number,
  products : [Schema.Types.ObjectId],
  priceRange : String,
  reviews : [{ body: String, date: Date }],
  offers : [],
  location : mongoose.Schema.Types.Point, 
  image : String
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var Shop = mongoose.model('shop', shop);
module.exports = Shop;
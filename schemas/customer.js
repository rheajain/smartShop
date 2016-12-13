var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GeoJSON = require('mongoose-geojson-schema');

var customer = new Schema({
  name:  { type: String, default : ""},
  phoneNo: { type: String, unique: true},
  emailId:   { type: String, unique: true},
  mostVisited : [],
  mostLiked : [],
  mostBought : [],
  wishlist : [],
  cart : [],
  location : Schema.Types.Point,
  password : String
  //comments: [{ body: String, date: Date }],
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var Customer = mongoose.model('Customer', customer);
module.exports = Customer;
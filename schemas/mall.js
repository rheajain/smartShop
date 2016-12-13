var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GeoJSON = require('mongoose-geojson-schema');

var mall = new Schema({
  id:  String,
  name: String,
  emailId:   String,
  closingTime : String,
  OpeningTime : String,
  rating : Number,
  products : [{ type: Schema.Types.ObjectId, ref : 'Product'}],
  shops : [{ type: Schema.Types.ObjectId, ref : 'Shop'}],
  reviews : [{ body: String, date: Date }],
  offers : [],
  location : mongoose.Schema.Types.Point
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var Mall = mongoose.model('Mall', mall);
module.exports = Mall;
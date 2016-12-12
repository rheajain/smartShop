var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Shop = require('./shop');

var vendor = new Schema({
  name:  String,
  phoneNo: String,
  emailId:   String,
  shop : Shop._id
  //comments: [{ body: String, date: Date }],
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var Vendor = mongoose.model('vendor', vendor);
module.exports = Vendor;
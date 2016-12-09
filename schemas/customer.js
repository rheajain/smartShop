var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customer = new Schema({
  name:  String,
  phoneNo: String,
  emailId:   String,
  //comments: [{ body: String, date: Date }],
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var customer = mongoose.model('customer', customer);
module.exports = customer;
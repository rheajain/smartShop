var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
  id:  String,
  name: String,
  comesUnder : { type: Schema.Types.ObjectId, ref :'Product', default: null}
  //date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

var Product = mongoose.model('Product', product);
module.exports = Product;
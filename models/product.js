var mongoose = require('mongoose')

//var Product = mongoose.model('Product')

var productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product;

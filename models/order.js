var mongoose = require('mongoose')

//var Order = mongoose.model('Order')

var Product = mongoose.model('Product')
var User = mongoose.model('User')

var orderSchema = new mongoose.Schema({
  
  createdAt: {type: Date, default: Date.now },
  address: Object,
  street: String,
  postcode: String,
  town: String,
  country: String,
  products: [Product.schema],
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order;


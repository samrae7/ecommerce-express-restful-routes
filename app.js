// REQUIREMENTS //
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce')

var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'))

// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'))

// body parser config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var Product = require('./models/product')
var User = require('./models/user') 
var Order = require('./models/order')

// setup modular routing for the resources
var usersRes = require ('./routes/usersRoute');
app.use('/users', usersRes);

var productsRes = require ('./routes/productsRoute');
app.use('/products', productsRes);

var ordersRes = require ('./routes/ordersRoute');
app.use('/orders', ordersRes);

//SEED DATA - USERS

 var ambar = new User({
  name: 'Ambar',
  gender: 'female',
  dob: 13/09/1977
 })

 var sam = new User({
  name: 'Sam',
  gender: 'male',
  dob: 13/09/1977
 })

 ambar.save(function(err, user) {
  if(err)console.log(err);
    console.log(user.name + ' saved');
 })

  sam.save(function(err, user) {
  if(err)console.log(err);
    console.log(user.name + ' saved');
 })

//SEED DATA - PRODUCTS

 var scissors = new Product({
  name: 'scissors',
  price: 3.99,
  description: 'very sharp'
 })

 var pen = new Product({
  name: 'pen',
  price: 2.00,
  description: 'writes well'
 })

 scissors.save(function(err, product) {
  if(err) console.log(err);
    console.log(product.name + ' saved');
 })

  pen.save(function(err, product) {
  if(err) console.log(err);
    console.log(product.name + ' saved');
 })

  //SEED DATA - ORDERS

  var stationaryOrder = new Order({
  address: {number:4, street:'arcadia street'},
  street: 'arcadia street',
  postcode: 'SW7 5BD',
  town: 'slough',
  country: 'UK',
  user: ambar
  })

  stationaryOrder.products.push(scissors);

  stationaryOrder.save(function(err, order){
    if(err) console.log(err);
    console.log('stationary order saved')
  })

// root path
app.get("/", function (req, res) {
  res.send('hello')
})


// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000")
})
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// mongoose.connect('mongodb://localhost/ecommerce');

var Product = require('../models/product')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));


//INDEX
router.get("/", function (req, res) {
  Product.find({}, function(err, products){
    if(err) console.log(err)
    res.json(products)
    })
})

//SHOW
router.get('/:id', function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) console.log(err)
    res.json(product)
  });
})

//CREATE
router.post('/', function(req, res) {
    Product.create(req.body, function (err, product) {
      if(err){
        res.json(err)
      }else{
        res.json(req.body);
   }
  });
});

//UPDATE
router.put("/:id", function(req, res){
  Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
    if(err) console.log(err)
    res.json(product);
  })
});

//DELETE
router.delete('/:id', function(req, res) {
  console.log('in delete product route');
  Product.findByIdAndRemove(req.params.id, function(err, product) {
    if(err) console.log(err);
    res.json('product');
  })
})


module.exports = router;
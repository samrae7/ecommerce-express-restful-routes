var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

//mongoose.connect('mongodb://localhost/ecommerce');

var Order = require('../models/order')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//INDEX
router.get("/", function (req, res) {
  Order.find({}, function(err, orders){
    if(err) console.log(err)
    res.json(orders)
    })
})

//SHOW
router.get('/:id', function(req, res) {
  Order.findById(req.params.id, function (err, order) {
    if(err) console.log(err)
    res.json(order)
  });
})

//CREATE
router.post('/', function(req, res) {
    Order.create(req.body, function (err, order) {
      if(err){
        res.json(err)
      }else{
        res.json(req.body);
   }
  });
});

//UPDATE
router.put("/:id", function(req, res){
  Order.findByIdAndUpdate(req.params.id, req.body, function(err, order){
    if(err) console.log(err)
    res.json(order);
  })
});

//DELETE
router.delete('/:id', function(req, res) {
  console.log('in delete order route');
  Order.findByIdAndRemove(req.params.id, function(err, order) {
    if(err) console.log(err);
    res.json('order');
  })
})



module.exports = router;
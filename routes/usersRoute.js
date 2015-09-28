var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var User = require('../models/user')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//INDEX
router.get("/", function (req, res) {
  User.find({}, function(err, users){
    if(err) console.log(err)
    res.json(users)
    })
})

//SHOW
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) console.log(err)
    res.json(user)
  });
})

//CREATE
router.post('/', function(req, res) {
    User.create(req.body, function (err, user) {
      if(err){
        res.json(err)
      }else{
        res.json(req.body);
   }
  });
});

//UPDATE
router.put("/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    if(err) console.log(err)
    res.json(user);
  })
});

//DELETE
router.delete('/:id', function(req, res) {
  console.log('in delete user route');
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) console.log(err);
    res.json('user');
  })
})



module.exports = router;
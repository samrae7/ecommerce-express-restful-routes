var mongoose = require('mongoose')

//var User = mongoose.model('User')

var userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: Date
})

var User = mongoose.model('User', userSchema)

module.exports = User;
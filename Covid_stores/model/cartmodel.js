const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const cartsSchema = new mongoose.Schema({
    username: String,
    expirymonth: String,
    year: String,
  });
  cartsSchema.plugin(passportLocalMongoose,{
    username: "cardnumber"
  });
module.exports = mongoose.model('Cart', cartsSchema); 
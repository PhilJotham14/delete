const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const cardpaymentsSchema = new mongoose.Schema({
    username: String,
    expirymonth: String,
    year: String,
  });
  cardpaymentsSchema.plugin(passportLocalMongoose,{
    username: "cardnumber"
  });
module.exports = mongoose.model('Cardpayment', cardpaymentsSchema); 
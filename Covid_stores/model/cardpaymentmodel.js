const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const cardpaymentsSchema = new mongoose.Schema({
    cardnumber: String,
    make: String,
  });
  cardpaymentsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Cardpayment', cardpaymentsSchema); 
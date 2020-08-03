const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const purchasesSchema = new mongoose.Schema({
    username: String,
    location: String,
    phonenumber: String,
    email: String,
    initialpay: String,
    nationalid: String,
    itemname: String,
    serialnumber: String,
    dateofpay: String,
    nextdate: String,
    amountnext: String,
    refereenum: String,
    receipt: String,
  });
  purchasesSchema.plugin(passportLocalMongoose,{
      username: 'customername'
  });
module.exports = mongoose.model('Purchase', purchasesSchema); 
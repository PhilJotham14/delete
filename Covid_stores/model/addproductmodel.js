const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const addproductsSchema = new mongoose.Schema({
    username: String,
    make: String,
    category: String,
    date: String,
    serialnumber: String,
    price: String,
    initialpay: String,
    payinterval: String,
    productdescription: String,
    uploadimage: String,
    color: String,
  });
addproductsSchema.plugin(passportLocalMongoose,{
  username: "nameofitem"
});
module.exports = mongoose.model('Addproduct', addproductsSchema); 
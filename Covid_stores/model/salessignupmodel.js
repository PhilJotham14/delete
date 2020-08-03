const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const salessignupsSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: 'Please Enter Your Email'
  },
  password: {
    type: String,
    required: 'Please Enter password'
  },
});
salessignupsSchema.plugin(passportLocalMongoose, {
  username: 'email'
});
module.exports = mongoose.model('Salessignup', salessignupsSchema);


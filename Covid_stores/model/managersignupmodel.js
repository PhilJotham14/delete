const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const managersignupsSchema = new mongoose.Schema({
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
managersignupsSchema.plugin(passportLocalMongoose, {
  username: 'email'
});
module.exports = mongoose.model('Managersignup', managersignupsSchema);

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const signupsSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: 'Please Enter Your Email'
  },
  password: {
    type: String,
  },
});
signupsSchema.plugin(passportLocalMongoose, {
  username: 'email'
});
module.exports = mongoose.model('Signup', signupsSchema);



// const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

// const signupsSchema = new mongoose.Schema({
//     email: {
//       type: String,
//       required: 'Please Enter Your Email'
//     },
//     password: {
//       type: String,
//       required: 'Please Enter password'
//     },
// });

// signupsSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model('Signup', signupsSchema);


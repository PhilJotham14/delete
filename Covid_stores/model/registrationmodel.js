const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registrationsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    company: String,
    email: {
        type: String,
        required: 'Please Enter Your Email'
      },
    area_code: String,
    phone: String,
    address: String,
    idcharacters: String,
    idnum: String,
    idcharacterstwo: String,
    employee: String,
  });

registrationsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Registration', registrationsSchema); 
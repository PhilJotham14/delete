const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registrationsSchema = new mongoose.Schema({
    username: String,
    last_name: String,
    company: String,
    email: String,
    area_code: String,
    phone: String,
    address: String,
    idcharacters: String,
    idnum: String,
    idcharacterstwo: String,
    employee: String,
  });

registrationsSchema.plugin(passportLocalMongoose,{
  username: "first_name"
});
module.exports = mongoose.model('Registration', registrationsSchema); 
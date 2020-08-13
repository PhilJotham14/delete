const passportLocal = require('passport-local').Strategy
const Managersignup= require('../model/managersignupmodel');
require('dotenv').config()
const bcrypt = require('bcryptjs');

module.exports = (passport)=>{
    passport.use(new passportLocal(function(username, password, done){
        let user = {
            username:username
        }
        Managersignup.findOne(user, (err, userresult) => {
            if(err){
                console.log(err)
            }
            if(!userresult){
                // return done(null,false,{message:'invalid user'})
                return done(null,false)
            }
            //If their is a user.
            bcrypt.compare(password,userresult.password,(err, isPassword)=>{
                if(err){
                    console.log(err)
                }
                if(isPassword){
                    return done(null,userresult)
                }else{
                    return done(null, false)
                }
            })
        })
    }))
    //serialize user.
    passport.serializeUser((userresult, done)=>{
        done(null, userresult.id)
    });
    passport.deserializeUser((id, done)=>{
        Managersignup.findById(id, (err, userresult)=>{
            done(err, userresult);
        });
    });

}

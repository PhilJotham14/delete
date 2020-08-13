const passport = require('passport')

module.exports = function isAuthenticate(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else{
        res.redirect('/managersignin/managersignin');
    }
}
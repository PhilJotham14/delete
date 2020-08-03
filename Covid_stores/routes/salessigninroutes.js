const express=require('express');
const passport = require('passport');
const router=express.Router();

var view = "./views/"

//displays the Dashboardsignup page
router.get('/salessignin', (req,res) => {
    // res.render('managersignin.html')
    res.sendFile("salessignin.html", { root: view });
})

router.post("/salessignin",passport.authenticate('local'),(req, res) => {
    req.session.user = req.user;
    res.redirect('/salesdashboard/salesdashboard');
});
module.exports=router;
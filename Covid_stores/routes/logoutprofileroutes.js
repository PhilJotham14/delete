const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const passport = require('passport');

var view = "./views/"

router.get('/logout', (req, res) => {
                req.logout() 
                res.redirect('/');
        })

  
  module.exports=router;
const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"

router.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/logout/logout');
            }
        })
    }  
  })
  
  module.exports=router;
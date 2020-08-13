const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Salessignup=require('../model/salessignupmodel')

//displays the Dashboardsignup page
router.get('/salessignup', (req,res) => {
    res.sendFile('salessignup.html', { root: view });
})

router.post("/salessignup", async (req, res) => {
    try {
      const items = new Salessignup(req.body);
      await Salessignup.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/salessignin/salessignin')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })

  module.exports=router;
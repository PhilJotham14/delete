const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Purchase=require('../model/purchaseformmodel')

//purchase
router.get('/purchase', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.sendFile("purchaseform.html", { root: view });
  })
  
  router.post('/purchase', async (req, res) => {
    //outputs the form values in the console
    // console.log(req.body);
    // res.redirect('/');
    const purchaseformmodel = new Purchase(req.body);
    try {
      await purchaseformmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/cardpayment/cardpayment')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  
  })
  module.exports=router;
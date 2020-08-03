const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Cardpayment=require('../model/cardpaymentmodel')

//card payment model
router.get('/cardpayment', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.sendFile("cardpaymentform.html", { root: view });
  })
  
  router.post('/cardpayment', async (req, res) => {
    //outputs the form values in the console
    // console.log(req.body);
    // res.redirect('/');
    const cardpaymentmodel = new Cardpayment(req.body);
    try {
      await cardpaymentmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  
  })
  module.exports=router;
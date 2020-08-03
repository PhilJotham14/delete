const express=require('express');
const router=express.Router();

var view = "./views/"
const Cart=require('../model/cartmodel')

router.get('/', (req, res) => {
    res.sendFile("cartform.html", { root: view });
  })
  router.post('/cart', async (req, res) => {
    //outputs the form values in the console
    // console.log(req.body);
    // res.redirect('/');
    const cartmodel = new Cart(req.body);
    try {
      await cartmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/cardpayment/cardpayment')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  
  })
  
module.exports=router;
const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Signin=require('../model/signupmodel')

//sign in
router.get('/signin', (req, res) => {
    // res.sendFile(__dirname + '/sign_in_form.html')
    res.sendFile('sign_in_form.html', { root: view });
  })
  
  // router.post('/signin', async (req, res) => {
  //   //outputs the form values in the console
  //   // console.log(req.body);
  //   // res.redirect('/');
  //   const signinmodel = new Signin(req.body);
  //   try {
  //     await signinmodel.save()
  //     res.redirect('/')
  // } catch (err) {
  //     res.send('Sorry! Something went wrong.');
  //     console.log(err);
  // }
  // })

  router.post("/signin", async (req, res) => {
    try {
      const items = new Signin(req.body);
      await Signin.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })

module.exports=router;
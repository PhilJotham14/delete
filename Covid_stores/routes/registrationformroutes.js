const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Registration=require('../model/registrationmodel')

//registration
router.get('/registration', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.sendFile("registration_form.html", { root: view });
  })
  
  router.post('/registration', async (req, res) => {
    //outputs the form values in the console
    // console.log(req.body);
    // res.redirect('/');
    const registrationmodel = new Registration(req.body);
    try {
      await registrationmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/register/userlist')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })
//Contiue from here after solving error.
  // router.post("/registration", async (req, res) => {
  //   try {
  //     const items = new Registration(req.body);
  //     await Registration.register(items, req.body.password, (err) => {
  //       if (err) { throw err }
  //       res.redirect('/register/userlist')
  //     })
  //   } catch (err) {
  //      res.status(400).send('Sorry! Something went wrong.')
  //      console.log(err)
  //   }
  // })

  
router.get('/userlist', async (req, res) => {
  try {
    let items = await Registration.find()
    if (req.query.email) {
      items = await Registration.find({ email: req.query.email })
    }
    res.render('list', { users: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
})

router.post("/delete", async (req, res) => {
  try {
    await Registration.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})

module.exports=router;

const express=require('express');
const router=express.Router();

var view = "./views/"

//sign in
router.get('/signin', (req, res) => {
    // res.sendFile(__dirname + '/sign_in_form.html')
    res.sendFile('/sign_in_form.html', { root: view });
  })
  
  router.post('/signin', (req, res) => {
    //outputs the form values in the console
    console.log(req.body);
    res.redirect('/');
  })

module.exports=router;
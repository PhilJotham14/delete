const express=require('express');
const router=express.Router();

var view = "./views/"

//sign up 
router.get('/signup', (req, res) => {
  res.sendFile("signUpForm.html", { root: view });
})

router.post('/signup', (req, res) => {
    // res.sendFile(__dirname + '/signUpForm.html')
      //outputs the form values in the console
  console.log(req.body);
  res.redirect('/signin/signin');
  })
  
module.exports=router;

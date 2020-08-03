const express=require('express');
const router=express.Router();


var view = "./views/"

router.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.sendFile('managerdashboard.html', { root: view });
  } else {
    res.redirect('/managersignin/managersignin')
    console.log('cannot find session')
  }
  })

module.exports = router;
  

// //registration
// router.get('/registration', (req, res) => {
//     // res.sendFile(__dirname + '/registration_form.html')
//     res.sendFile("registration_form.html", { root: view });
//   })
  
//   router.post('/registration', (req, res) => {
//     //outputs the form values in the console
//     console.log(req.body);
//     res.redirect('/');
//   })
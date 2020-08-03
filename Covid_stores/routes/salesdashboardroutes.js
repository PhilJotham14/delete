const express=require('express');
const router=express.Router();

var view = "./views/"

// router.get('/salesdashboard', (req, res) => {
//     res.sendFile("salesdashboard.html", { root: view });
//   })

  router.get('/salesdashboard', (req, res) => {
    if (req.session.user) {
      res.sendFile('salesdashboard.html', { root: view });
    } else {
      res.redirect('/salessignin/salessignin')
      console.log('cannot find session')
    }
    })
  
module.exports=router;
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
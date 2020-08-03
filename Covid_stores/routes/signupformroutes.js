const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
const Signup=require('../model/signupmodel')

//sign up 
router.get('/signup', (req, res) => {
  res.sendFile("signUpForm.html", { root: view });
})

// router.post('/signup', async (req, res) => {
//     // res.sendFile(__dirname + '/signUpForm.html')
//       //outputs the form values in the console
//       const signupmodel = new Signup(req.body);
//       try {
//         await signupmodel.save()
//         // res.send('Thank you for your registration!');
//         res.redirect('/signin/signin')
//     } catch (err) {
//         res.send('Sorry! Something went wrong.');
//         console.log(err);
//     }
//   // console.log(req.body);
//   // res.redirect('/signin/signin');
//   })
router.post("/signup", async (req, res) => {
  try {
    const items = new Signup(req.body);
    await Signup.register(items, req.body.password, (err) => {
      if (err) { throw err }
      res.redirect('/signin/signin')
    })
  } catch (err) {
     res.status(400).send('Sorry! Something went wrong.')
     console.log(err)
  }
})
module.exports=router;

// router.get('/userlist', async (req, res) => {
//   if (req.session.user) {
      
//     try {
//         let items = await Signup.find()
//         if (req.query.gender) {
//           items = await Signup.find({ gender: req.query.gender })
//         }
//         res.render('list', { users: items, currentUser: req.session.user})
//       } catch (err) {
//         res.status(400).send("unable to find items in the database");
//       }

//     } else {
//       console.log("cant find session")
//       res.redirect('/signin/signin')
//   }
//   })

//   router.post("/delete", async (req, res) => {
//     if (req.session.user) {
//     try {
//       await Signup.deleteOne({_id: req.body.id })
//       res.redirect('back')
//     } catch (error) {
//        res.status(400).send("unable to delete to database");
//     }
//   } else {
//     console.log("cant find session")
//     res.redirect('/signin/signin')
//   }
//   })

//   //logout
// router.post('/logout', (req, res) => {
//   if (req.session) {
//       req.session.destroy(function (err) {
//           if (err) {
//               // failed to destroy session
//           } else {
//               return res.redirect('/signin/signin');
//           }
//       })
//   }  
// })


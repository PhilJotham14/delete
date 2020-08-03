const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"
require('../model/managersignupmodel')
const Managersignup= mongoose.model('Managersignup');

//displays the Dashboardsignup page
router.get('/managersignup', (req,res) => {
    res.sendFile('managersignup.html', { root: view });
})

router.post("/managersignup", async (req, res) => {
    try {
      const items = new Managersignup(req.body);
      await Managersignup.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/managersignin/managersignin')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })
  
  module.exports=router;

//   router.get('/managersignup', async (req, res) => {
//     if (req.session.user) {
        
//       try {
//           let items = await Managersignup.find()
//           if (req.query.gender) {
//             items = await Managersignup.find({ gender: req.query.gender })
//           }
//           res.render('list', { users: items, currentUser: req.session.user})
//         } catch (err) {
//           res.status(400).send("unable to find items in the database");
//         }
  
//       } else {
//         console.log("cant find session")
//         res.redirect('/managersignin/managersignin')
//     }
//     })

  
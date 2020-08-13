const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const bcryptJs=require('bcryptjs');
const authentication=require('../middleware/authen')

var view = "./views/"
// require('../model/managersignupmodel')
const Managersignup= require('../model/managersignupmodel');


//displays the Dashboardsignup page
router.get('/managersignup', authentication,(req,res) => {
    res.sendFile('managersignup.html', { root: view });
})

// router.post("/managersignup", async (req, res) => {
//     try {
//       const items = new Managersignup(req.body);
//       await Managersignup.register(items, req.body.password, (err) => {
//         if (err) { throw err }
//         res.redirect('/managersignin/managersignin')
//       })
//     } catch (err) {
//        res.status(400).send('Sorry! Something went wrong.')
//        console.log(err)
//     }
//   })

  router.post('/managersignup', authentication, async(req,res)=>{
    const user = new Managersignup();
    user.username=req.body.username
    user.password=req.body.password
    try{
      await bcryptJs.genSalt(10,(err,salt)=>{
        bcryptJs.hash(user.password,salt,(err,hash)=>{
          if(err){
            // res.redirect('/managersignin/managersignin')
            console.log(err)
          }else{
            user.password=hash;
            user.save((err,result)=>{
              if(err){
                console.log(err)
              }else{
                console.log(result)
              }
            });
          }
        })
      })
    }catch(err){
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

  
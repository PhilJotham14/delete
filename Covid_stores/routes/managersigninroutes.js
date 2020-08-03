const express=require('express');
const passport = require('passport');
const router=express.Router();

var view = "./views/"

//displays the Dashboardsignup page
router.get('/managersignin', (req,res) => {
    // res.render('managersignin.html')
    res.sendFile("managersignin.html", { root: view });
})

router.post("/managersignin",passport.authenticate('local'),(req, res) => {
    req.session.user = req.user;
    res.redirect('/dashboard/dashboard');
});
    // try {
    //   const items = new Managersignin(req.body);
    //   await Managersignin.register(items, req.body.password, (err) => {
    //     if (err) { throw err }
    //     res.redirect('/dashboard/dashboard')
    //   })
    // } catch (err) {
    //    res.status(400).send('Sorry! Something went wrong.')
    //    console.log(err)
    // }
//   })

//   router.get('/managersignin', async (req, res) => {
//     if (req.session.user) {
        
//       try {
//           let items = await Managersignin.find()
//           if (req.query.gender) {
//             items = await Managersignin.find({ gender: req.query.gender })
//           }
//           res.render('list', { users: items, currentUser: req.session.user})
//         } catch (err) {
//           res.status(400).send("unable to find items in the database");
//         }
  
//       } else {
//         console.log("cant find session")
//         res.redirect('/dashboard/dashboard')
//     }
//     })

    module.exports=router;
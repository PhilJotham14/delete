const express=require('express');
const router=express.Router();

// var view = "./views/"
const Addproduct=require('../model/addproductmodel')

// router.get('/', (req, res) => {
//     res.sendFile("sales.html", { root: view });
//   })

  router.get('/', async (req, res) => {
    try {
      let items = await Addproduct.find()
      if (req.query.gender) {
        items = await Addproduct.find({ gender: req.query.gender })
      }
      //addproductform is for the PUG file.
      res.render('sales', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })
module.exports=router;  
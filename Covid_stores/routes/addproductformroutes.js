const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const multer = require('multer');

var view = "./views/"
const Addproduct=require('../model/addproductmodel')

// uploading image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})




//registration
router.get('/addproduct', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.sendFile("addproductform.html", { root: view });
  })

  router.post('/addproduct', upload.single('uploadimage'), async (req, res) => {
    //outputs the form values in the console
    console.log(req.body);
    console.log(req.file);
    // res.redirect('/');
    const addproductmodel = new Addproduct({
      username: req.body.username,
      make: req.body.make,
      category: req.body.category,
      date: req.body.date,
      serialnumber: req.body.serialnumber,
      price: req.body.price,
      initialpay: req.body.initialpay,
      payinterval: req.body.payinterval,
      productdescription: req.body.productdescription,
      uploadimage: req.file.path,
      color: req.body.color
    });
    try {
      await addproductmodel.save()
      // res.send('Thank you for your registration!');
      console.log(req.body);
      res.redirect('/addproduct/addproductform')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

  router.get('/addproductform', async (req, res) => {
    try {
      let items = await Addproduct.find()
      if (req.query.category) {
        items = await Addproduct.find({ category: req.query.category })
      }
      //addproductform is for the PUG file.
      res.render('addproductform', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })
  
  router.post("/delete", async (req, res) => {
    try {
      await Addproduct.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })
  

  router.post('/addproduct/:id', upload.single('uploadimage'), async (req, res) => {
    //outputs the form values in the console
    console.log(req.body);
    console.log(req.file);
    // res.redirect('/');
    const addproductmodel = new Addproduct({
      username: req.body.username,
      make: req.body.make,
      category: req.body.category,
      date: req.body.date,
      serialnumber: req.body.serialnumber,
      price: req.body.price,
      initialpay: req.body.initialpay,
      payinterval: req.body.payinterval,
      productdescription: req.body.productdescription,
      uploadimage: req.file.path,
      color: req.body.color
    });
    try {
      await addproductmodel.update()
      // res.send('Thank you for your registration!');
      console.log(req.body);
      res.redirect('/addproduct/addproductformdup')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

  router.get('/edit/:id', (req,res)=>{
    Addproduct.findById(req.params.id, (errror, products) =>{
      // res.render('admins/edit_agent',
      // res.redirect('/cardpayment/cardpayment'
      res.sendFile("addproductformdup.html", { root: view,
        products:products
      })
    })
  })
  
  module.exports=router;
  
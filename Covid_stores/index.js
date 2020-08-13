const express = require('express');

const path = require('path');
const registrationformRoutes=require('./routes/registrationformroutes')
const registrationpugRoutes=require('./routes/registrationformroutes')
const signupformRoutes=require('./routes/signupformroutes')
const signinformRoutes=require('./routes/signinformroutes')
const dashboardformRoutes=require('./routes/managerdashboardroutes')
const salesdashboardformRoutes=require('./routes/salesdashboardroutes')
const indexRoutes=require('./routes/indexroutes')
const aboutusRoutes=require('./routes/aboutusroutes')
const salesRoutes=require('./routes/salesroutes')
const addproductformRoutes=require('./routes/addproductformroutes')
const cartformRoutes=require('./routes/cartformroutes')
const purchaseformRoutes=require('./routes/purchaseroutes')
const cardpaymentformRoutes=require('./routes/cardpaymentformroutes')
const managersignupformRoutes=require('./routes/managersignuproutes')
const managersigninformRoutes=require('./routes/managersigninroutes')
const salessignupformRoutes=require('./routes/salessignuproutes')
const salessigninformRoutes=require('./routes/salessigninroutes')
const logoutprofileformRoutes=require('./routes/logoutprofileroutes')
const Flash=require('connect-flash')

const bodyParser= require('body-parser')


const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport');

//mongoose
require('dotenv').config();
const mongoose = require('mongoose');

const Signup=require('./model/signupmodel');
const Registration=require('./model/registrationmodel');
const Addproduct=require('./model/addproductmodel');
const Cart=require('./model/cartmodel');
const Managersignup=require('./model/managersignupmodel');
const Salessignup=require('./model/salessignupmodel');
const Purchase=require('./model/purchaseformmodel');
const Cardpayment=require('./model/cardpaymentmodel');


const app = express();

//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

var view = "./views/"
//calling html file in the view folder this helps in using html if you dont want to use Pug.
// var view = "./views/";

app.set('view engine', 'pug')
app.set('views', './views');

//Setting up the view engine Pug but you are not using it in your project.
// app.set('view engine', 'pug');
// app.set('views', './views')

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('connect-flash')());   //Change later


app.use(expressSession);

app.use(express.static(path.join(__dirname, "public")));

//Passport configs.
require('./middleware/authenticate')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Registration Passport configs
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//Sign up Passport configs
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

//Add product Passport configs
passport.use(Addproduct.createStrategy());
passport.serializeUser(Addproduct.serializeUser());
passport.deserializeUser(Addproduct.deserializeUser());

// Manager Dashboard Sign up Passport configs
// passport.use(Managersignup.createStrategy());
// passport.serializeUser(Managersignup.serializeUser());
// passport.deserializeUser(Managersignup.deserializeUser());

//Sales Agent Sign Up Dashboard Passport configs
passport.use(Salessignup.createStrategy());
passport.serializeUser(Salessignup.serializeUser());
passport.deserializeUser(Salessignup.deserializeUser());

//Purchase Form Passport configs
passport.use(Purchase.createStrategy());
passport.serializeUser(Purchase.serializeUser());
passport.deserializeUser(Purchase.deserializeUser());

//Card Payment Form Passport configs
passport.use(Cardpayment.createStrategy());
passport.serializeUser(Cardpayment.serializeUser());
passport.deserializeUser(Cardpayment.deserializeUser());

//Cart Form Passport configs
passport.use(Cart.createStrategy());
passport.serializeUser(Cart.serializeUser());
passport.deserializeUser(Cart.deserializeUser());






//Registering use of middleware.
app.use('/',indexRoutes);
app.use('/registration',registrationformRoutes);
app.use('/signup',signupformRoutes);
app.use('/signin',signinformRoutes);
app.use('/dashboard',dashboardformRoutes);
app.use('/salesdashboard',salesdashboardformRoutes);
app.use('/register',registrationpugRoutes);
app.use('/addproduct',addproductformRoutes);
app.use('/aboutus',aboutusRoutes);
app.use('/sales',salesRoutes);
app.use ('/cart',cartformRoutes);
app.use('/purchase',purchaseformRoutes);
app.use ('/cardpayment',cardpaymentformRoutes);
app.use('/managersignup',managersignupformRoutes);
app.use ('/managersignin',managersigninformRoutes);
app.use('/salessignup',salessignupformRoutes);
app.use ('/salessignin',salessigninformRoutes);
app.use('/logout',logoutprofileformRoutes);
app.use('/addproduct/uploads', express.static(path.join(__dirname, 'uploads')));



//route for the html file 
// app.get('/test', (req,res)=>{
//     res.sendFile("testing.html", { root: view });
// })


// home page (/) route
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')
// })



// //sign up 
// app.get('/signup', (req, res) => {
//   res.sendFile(__dirname + '/signUpForm.html')
// })

// app.post('/signup', (req, res) => {
//   //outputs the form values in the console
//   console.log(req.body);
//   res.redirect('/signin');
// })

// //sign in
// app.get('/signin', (req, res) => {
//   res.sendFile(__dirname + '/sign_in_form.html')
// })

// app.post('/signin', (req, res) => {
//   //outputs the form values in the console
//   console.log(req.body);
//   res.redirect('/');
// })

// //registration
// app.get('/registration', (req, res) => {
//   res.sendFile(__dirname + '/registration_form.html')
// })

// app.post('/registration', (req, res) => {
//   //outputs the form values in the console
//   console.log(req.body);
//   res.redirect('/');
// })



//When a wrong path is accessed.
app.get('*', (req, res) => {
  res.send('ERROR')
})

// Listening for requests: the server!
app.listen(3000, () => {
  console.log(`Express running → PORT 3000`);
});


    
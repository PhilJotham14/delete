const express = require('express');
const bodyParser= require('body-parser')
const registrationformRoutes=require('./routes/registrationform')
const signupformRoutes=require('./routes/signupform')
const signinformRoutes=require('./routes/signinform')
const path = require('path');

const app = express();

//Setting up the view engine Pug but you are not using it in your project.
// app.set('view engine', 'pug');
// app.set('views', './views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));


//Registering use of middleware.
app.use('/registration',registrationformRoutes);
app.use('/signup',signupformRoutes);
app.use('/signin',signinformRoutes);

var view = "./views/"
//calling html file in the view folder this helps in using html if you dont want to use Pug.
// var view = "./views/";

// app.set('view engine', 'pug')
// app.set('views', './views');

//route for the html file 
// app.get('/test', (req,res)=>{
//     res.sendFile("testing.html", { root: view });
// })


// home page (/) route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})



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


    
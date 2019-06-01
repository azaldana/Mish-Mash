// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
// const path = require('path'); 
const mongoose = require("mongoose");
const routes = require('./routes');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/'});
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
require('dotenv').config();


// Sets up the Express App
// =============================================================
const app = express();


// app.use(morgan('dev'));
var PORT = process.env.PORT || 3001;


// Requiring our models for syncing
// var db = require('./models');
// require('./models/form')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mishmash",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// require('./config/cloudinaryConfig')
// const upload = require('./config/multer')
// const Form = mongoose.model('Form')

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   console.log("hello")
//   res.render('index')
// })

// app.get('/create', async (req, res) => {
//   console.log("hello2")
//   const form = await Form.find({})
//   res.render('forms', {
//     form
//   })
// })


// app.post('/create', upload.single('image'), async (req, res) => {
//   console.log("hello")
//   const result = await cloudinary.v2.uploader.upload(req.file.path)
//   console.log("hello 2")
//   const post = {
//     title: req.body.title,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions,
//     totalTime: req.body.totalTime,
//     servings: req.body.servings,
//     social: req.body.social,
//     image: result.secure_url,
//     image_id: result.public_id
// }
//   await post.save()
//   res.send({
//     message: 'Blog is Created'
//   })
// })


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
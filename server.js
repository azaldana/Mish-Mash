// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
// const path = require('path'); 
const mongoose = require("mongoose");
const routes = require('./routes');
const unirest = require('unirest');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/'});
// var bodyParser = require('body-parser');
// var morgan       = require('morgan');

// Sets up the Express App
// =============================================================
var app = express();


// app.use(morgan('dev'));
var PORT = process.env.PORT || 3001;


// Requiring our models for syncing
// var db = require('./models');

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

// app.post('/upload', upload.single('picture'), (req, res) => {
//   const { name } = req.body;
//   console.log(name);
//   console.log(req.file);

//   res.send("OK!");
// })


app.post('/api/categories', function (req, res) {
  var ingredients = req.body.ingredient
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + ingredients)
    .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "WPW7FyEBbTmshvFlCq04kYiUjJU8p1BiPTajsn0sk2QRRQeYTY")
    .end(function (result) {
      res.json(result.body)
    });
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
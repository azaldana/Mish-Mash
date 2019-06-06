const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
require("dotenv").config();
const app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mishmash", {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.get("/api/recipes/:id", function(req, res) {
  console.log("line 30", req.params);
});

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

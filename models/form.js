// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var formSchema = new Schema({
    title: String,
    ingredients: String,
    instructions: String,
    totalTime: String,
    servings: String,
    social: String,
    image: String,
    image_id: String
    
});

// the schema is useless so far
// we need to create a model using it
var Form = mongoose.model('Form', formSchema);

// make this available to our users in our Node applications
module.exports = Form;
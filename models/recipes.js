const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  id: { 
    type: Number, 
    required: true },
  title: { 
    type: String 
  },
  image: { 
    type: String, 
    required: true 
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: { 
    type: String, 
    required: true 
  },
  preparationMinutes: { 
    type: Number, 
    required: true 
  },
  servings: {
    type: Number,
    required: true
  }
});

const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;

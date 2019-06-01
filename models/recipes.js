const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  id: { 
    type: Number, 
    required: true },
  title: { 
    type: String 
  },
  img: { 
    type: String, 
    required: true 
  },
  instructions: { 
    type: String, 
    required: true 
  },
  prepTime: { 
    type: Number, 
    required: true 
  },
});

const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;

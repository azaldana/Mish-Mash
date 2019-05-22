const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  originalString: { 
    type: String 
  }
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

module.exports = Ingredients;

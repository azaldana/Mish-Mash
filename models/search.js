const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  title: { 
    type: String 
  },
  spoonacularId: { 
    type: Number, 
    required: true 
  },
  smallImg: { 
    type: String, 
    required: true 
  }
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;

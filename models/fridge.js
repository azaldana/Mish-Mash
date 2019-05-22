const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeSchema = new Schema({
  name: { type: String, required: true }
});

const Fridge = mongoose.model("Fridge", fridgeSchema);

module.exports = Fridge;



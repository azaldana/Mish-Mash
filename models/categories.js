const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
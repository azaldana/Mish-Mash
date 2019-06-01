// ./app/controller.js
// const cloudinary = require('cloudinary');
const db = require("../models");


// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_ID,
//   api_secret: process.env.API_SECRET
// })

module.exports = {
    create: function (req, res) {
        console.log("we are in the function for upload")
        // const result = cloudinary.v2.uploader.upload(req.file.path)
        const post = {
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            totalTime: req.body.totalTime,
            servings: req.body.servings,
            social: req.body.social,
            // image: "",
            // image_id: 0
            image: result.secure_url,
            image_id: result.public_id
        };
        db.Form
            .create(post)
            .then(dbModel => res.json(dbModel))
    }
};



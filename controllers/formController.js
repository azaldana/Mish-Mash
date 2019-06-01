// // ./app/controller.js
// const cloudinary = require('cloudinary');
// const db = require("../models");


// // cloudinary.config({
// //   cloud_name: process.env.CLOUD_NAME,
// //   api_key: process.env.API_ID,
// //   api_secret: process.env.API_SECRET
// // })

// module.exports = {
//     create: function (req, res) {
//         console.log("we are in the function for upload")
//         const result = cloudinary.v2.uploader.upload(req.file.path)
//         const post = {
//             title: req.body.title,
//             ingredients: req.body.ingredients,
//             instructions: req.body.instructions,
//             totalTime: req.body.totalTime,
//             servings: req.body.servings,
//             social: req.body.social,
//             // image: "",
//             // image_id: 0
//             image: result.secure_url,
//             image_id: result.public_id
//         };
//         db.Form
//             .create(post)
//             .then(dbModel => res.json(dbModel))
//     }
// };

    // create: function (req, res) {
    //     // cloudinary.v2.uploader.upload(req.files.image.path,
    //     //     { width: 300, height: 300, crop: "limit", tags: req.body.tags, moderation: 'manual' },
    //         function (err, result) {
    //             console.log(result);
    //             const post = new Model({
    //                 title: req.body.title,
    //                 ingredients: req.body.ingredients,
    //                 instructions: req.body.instructions,
    //                 totalTime: req.body.totalTime,
    //                 servings: req.body.servings,
    //                 image: result.url,
    //                 image_id: result.public_id
    //             });

    //             post.save(function (err) {
    //                 if (err) {
    //                     res.send(err)
    //                 }
    //                 res.redirect('/');
    //             });
    //         });
    // },
    // find: function (req, res) {
    //     var id = req.params.id;
    //     Model.findOne({ image_id: id }, function (err, post) {
    //         if (err) res.send(err);

    //         res.render('pages/single', { post: post, image: cloudinary.image, image_url: cloudinary.url });
    //     })
    // },
    // new: function (req, res) {
    //     res.render('pages/new');
    // },
    // edit: function (req, res) {
    //     Model.find({ image_id: req.params.id }, function (err, posts) {
    //         if (err) res.send(err);

    //         res.render('pages/edit', { post: posts[0] });
    //     });
    // },
    // update: function (req, res) {
    //     var oldName = req.body.old_id
    //     var newName = req.body.image_id;
    //     console.log(req.body);
    //     cloudinary.v2.uploader.rename(oldName, newName,
    //         function (error, result) {
    //             if (error) res.send(error);
    //             console.log(result);

    //             Model.findOneAndUpdate({ image_id: oldName },
    //                 Object.assign({}, req.body, { image: result.url }),
    //                 function (err) {
    //                     if (err) res.send(err);

    //                     res.redirect('/');
    //                 })
    //         })

    // },
    // destroy: function (req, res) {
    //     var imageId = req.body.image_id;
    //     cloudinary.v2.uploader.destroy(imageId, function (error, result) {
    //         Model.findOneAndRemove({ image_id: imageId }, function (err) {
    //             if (err) res.send(err);

    //             res.redirect('/');
    //         });
    //     });
    // },

    // admin: {
    //     index: function (req, res) {
    //         var q = req.query.q;
    //         var callback = function (result) {
    //             var searchValue = '';
    //             if (q) {
    //                 searchValue = q;
    //             }
    //             res.render('admin/index', { posts: result.resources, searchValue: searchValue });
    //         };
    //         if (q) {
    //             cloudinary.api.resources(callback,
    //                 { type: 'upload', prefix: q });
    //         } else {
    //             cloudinary.api.resources(callback);
    //         }
    //     }
    // }
// };

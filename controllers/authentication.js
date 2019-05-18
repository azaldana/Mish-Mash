const jwt = require("jsonwebtoken");
// jwt middleware
module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    res.status(404).json({
      error: "Not Authenticated"
    });
  }

  jwt.verify(token.replace("Bearer ", ""), "my-website-secret", function(err, decoded) {
    if (err) {
      console.error(err);
      res.status(404).json({
        error: "Not Authenticated"
      });
    }
    req.user = decoded;
    next();
  });
}
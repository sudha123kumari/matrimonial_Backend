const { json } = require("body-parser");
const User = require("../models/user");

exports.data = (req, res) => {
  User.find().exec((err, user) => {
    if (user) {
      console.log(user);
      return res.status(200).json({
        user,
      });
    }
  });
};

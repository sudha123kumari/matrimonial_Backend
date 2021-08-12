const { json } = require("body-parser");
const User = require("../models/user");

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      console.log(user);
      if (user.password === password) {
        return res.status(200).json({
          user,
        });
      }
      return res.status(400).json({
        error: "password wrong",
      });
    } else {
      return res.status(400).json({
        error: "email doesnot exist",
      });
    }
  });
};

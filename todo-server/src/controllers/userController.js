const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validator = require("validator");

const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "You must provide email and password" });
  }

  const sanitizeEmail = validator.escape(email);
  const sanitizePassword = validator.escape(password);

  console.log(sanitizePassword)

  if (!validator.isEmail(sanitizeEmail)) {
    return res
      .status(400)
      .json({ success: false, error: "You must provide a valid email" });
  }

  if(sanitizePassword.length < 6){
    return res
    .status(400)
    .json({success: false, error: "Password must be at least 6 characters"});
  }

  const isUser = await User.findOne({ email: sanitizeEmail });
  //console.log(isUser);

  if (isUser) {
    return res
      .status(403)
      .json({ success: false, error: "Email already exists" });
  }

  const user = await new User({
    email:sanitizeEmail,
    password: sanitizePassword,
  });

  user
    .save()
    .then((user) => {
      const token = jwt.sign({ userId: user._id }, "My_boli_token");
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "User created",
        data: { token },
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        error: "User not created",
      });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "You must provied email and password" });
  }

  await User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ success: false, error: "Invalid password or email" });
      }

      try {
        user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "My_boli_token");
        res.status(200).json({ success: true, data: { token } });
      } catch (err) {
        return res.status(401).json({ error: "Invalid password or email" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  signup,
  login,
};

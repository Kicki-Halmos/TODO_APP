const mongoose = require("mongoose");
const jwt = mongoose.model("jsonwebtoken");
const User = require("../models/User");

const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .jsont({ success: false, error: "You must provied email and password" });
  }

  const user = await new User({
    email,
    password,
  });

  user
    .save()
    .then(() => {
      const token = jwt.sign({ userId: user._id }, "My_boli_token");
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "User created",
        data: User,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "User not created",
      });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .jsont({ success: false, error: "You must provied email and password" });
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
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "My_boli_token");
        res.status(200).json({ success: true, data: user, token: token });
      } catch (err) {
        return res.status(401).send({ error: "Invalid password or email" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  signup,
  login,
};

/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const signup = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    return { status: 400, success: false, error: 'You must provide email and password' };
  }
  const sanitizeEmail = validator.escape(email);
  const sanitizePassword = validator.escape(password);

  if (!validator.isEmail(sanitizeEmail)) {
    return { status: 400, success: false, error: 'You must provide a valid email' };
  }

  if (sanitizePassword.length < 6) {
    return { status: 400, success: false, error: 'Password must be at least 6 characters' };
  }

  const isUser = await User.findOne({ email: sanitizeEmail });

  if (isUser) {
    return { status: 403, success: false, error: 'Email already exists' };
  }
  try {
    const user = await new User({
      email: sanitizeEmail,
      password: sanitizePassword,
    });
    user.save();

    const token = jwt.sign({ user }, process.env.JWT_SECRET);
    return {
      status: 200,
      success: true,
      id: user._id,
      message: 'User created',
      data: { token },
    };
  } catch (error) {
    return {
      status: 400,
      success: false,
      error: 'User not created',
    };
  }
};

const login = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    return { status: 400, success: false, error: 'You must provide email and password' };
  }

  try {
    const user = await User.findOne({ email })
      .exec();
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ user }, process.env.JWT_SECRET);
      return { status: 200, success: true, data: { token } };
    }
    return { status: 401, success: false, error: 'Invalid password or email' };
  } catch (error) {
    return { status: 401, success: false, error: 'Invalid password or email' };
  }
};

module.exports = {
  signup,
  login,
};

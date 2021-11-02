const mongoose = require('mongoose');
const User = require('./User');

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Todo', todoSchema);

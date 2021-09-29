const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  timestamps: true,
});

moongose.model('Todo', todoSchema);

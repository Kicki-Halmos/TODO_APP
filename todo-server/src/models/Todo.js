const mongoose = require("mongoose");
const User = require('./User')

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

mongoose.model("Todo", todoSchema);

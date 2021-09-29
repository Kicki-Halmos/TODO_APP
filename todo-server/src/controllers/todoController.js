const mongoose = require("mongoose");

const Todo = require("../models/Todo");

const getTodoList = async (req, res) => {
  // get todolist from mongodb
  await Todo.find({})
    .exec()
    .then((todoList) => {
      if (todoList.length === 0 || !todoList) {
        return res
          .status(404)
          .send({ success: false, error: "Todo-list not found" });
      }
      return res.status(200).send({ success: true, data: todoList });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, error: err });
    });
};

const getTodoById = async (req, res) => {
  // get single todo by ID from mongodb
  await Todo.findOne({ _id: req.params.id })
    .exec()
    .then((todoItem) => {
      if (!todoItem) {
        return res
          .status(404)
          .send({ success: false, error: "Todo item not found" });
      }

      return res.status(200).send({ success: true, data: todoItem });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, error: err });
    });
};

const updateTodoItem = async (req, res) => {
  // update todo item and post to mongodDB

  const body = req.body;
  if (!body) {
    return res
      .status(400)
      .send({ success: false, error: "You must provide a body to update" });
  }
  await Todo.findByIdAndUpdate(req.params.id, {
    title: body.title,
    body: body.body,
  })
    .exec()
    .then((updatedItem) => {
      if (!updatedItem) {
        return res
          .status(404)
          .send({ success: false, error: "Todo item not found" });
      }

      return res.status(200).send({
        success: true,
        id: updatedItem._id,
        message: "Todo item was updated",
      });
    })

    .catch((err) => {
      return res.status(400).send({ success: false, error: err });
    });
};

const createTodo = async (req, res) => {
  // post todo item to mongoDB
  const body = req.body;
  if (!body) {
    return res
      .status(400)
      .send({ success: false, error: "You must provide a todo item" });
  }
  const todoItem = await new Todo({ title: body.title, body: body.body });
  if (!todoItem) {
    return res.status(400).send({ success: false, error: err });
  }

  todoItem
    .save()
    .then(() => {
      return res.status(200).send({
        success: true,
        id: todoItem._id,
        message: "Todo item created",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send({
        err,
        message: "Todo item not created",
      });
    });
};

const deleteTodoItem = async (req, res) => {
  // find single todo by ID and delete from mongoDB
  await Todo.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((todo) => {
      

      if (!todo) {
        return res
          .status(404)
          .json({ success: false, error: `Todo item not found` });
      }
      return res
        .status(200)
        .send({ success: true, message: "Todo item deleted" });
    })
    .catch((err) => {
      return res.status(400).send({ success: false, error: err });
    });
};

module.exports = {
  getTodoList,
  getTodoById,
  updateTodoItem,
  createTodo,
  deleteTodoItem,
};

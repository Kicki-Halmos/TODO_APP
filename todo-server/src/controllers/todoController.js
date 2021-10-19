/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

const Todo = require('../models/Todo');

const getTodoList = async (req, res) => {
  // get todolist from mongodb
  await Todo.find({ userId: req.user._id })
    .exec()
    .then((todoList) => {
      if (!todoList) {
        return res
          .status(404)
          .json({ success: false, error: 'Todo-list not found' });
      }
      return res.status(200).json({ success: true, data: todoList });
    })
    .catch((err) => res.status(400).json({ success: false, error: err }));
};

const getTodoById = async (req, res) => {
  // get single todo by ID from mongodb
  await Todo.findOne({ _id: req.params.id })
    .exec()
    .then((todoItem) => {
      if (!todoItem) {
        return res
          .status(404)
          .json({ success: false, error: 'Todo item not found' });
      }

      return res.status(200).json({ success: true, data: todoItem });
    })
    .catch((err) => res.status(400).json({ success: false, error: err }));
};

const updateTodoItem = async (req, res) => {
  // update todo item and post to mongodDB

  const { body } = req;
  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: 'You must provide a body to update' });
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
          .json({ success: false, error: 'Todo item not found' });
      }

      return res.status(200).json({
        success: true,
        id: updatedItem._id,
        message: 'Todo item was updated',
      });
    })

    .catch((err) => res.status(400).json({ success: false, error: err }));
};

const createTodo = async (req, res) => {
  // post todo item to mongoDB
  const { body } = req;
  // console.log(body.title);
  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: 'You must provide a todo item' });
  }
  const todoItem = await new Todo({
    title: body.title.title,
    body: body.title.body,
    userId: req.user._id,
  });

  todoItem
    .save()
    .then(() => res.status(200).json({
      success: true,
      id: todoItem._id,
      message: 'Todo item created',
      data: todoItem,
    }))
    .catch((err) => res.status(400).json({ error: err, message: 'Todo item not created' }));
};

const deleteTodoItem = async (req, res) => {
  // find single todo by ID and delete from mongoDB
  await Todo.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((todo) => {
      if (!todo) {
        return res
          .status(404)
          .json({ success: false, error: 'Todo item not found' });
      }
      return res
        .status(200)
        .json({ success: true, message: 'Todo item deleted' });
    })
    .catch((err) => res.status(400).json({ success: false, error: err }));
};

module.exports = {
  getTodoList,
  getTodoById,
  updateTodoItem,
  createTodo,
  deleteTodoItem,
};

const mongoose = require("mongoose");

const Todo = require('../models/Todo');

const getTodoList = async (req, res) => {
  // get todolist from mongodb
  const todoList = await Todo.find({});
  return res.json(todoList);
};

const getTodoById = async (req, res) => {
  // get single todo by ID from mongodb
  const todoItem = await Todo.findOne({ _id: req.params.id });
  return res.json(todoItem);
};

const updateTodoItem = async (req, res) => {
  // update todo item and post to mongodDB

  const { title, body } = req.body;
  const updatedItem = await Todo.findOne({ _id: req.params.id });

  (updatedItem.title = title), (updatedItem.body = body);
  updatedItem.save().then(() => {
    return res.json(updatedItem);
  });
};

const createTodo = async (req, res) => {
  // post todo item to mongoDB
  const { title, body } = req.body;
  const todoItem = await new Todo({ title, body });
  todoItem.save().then(() => {
    return res.json(todoItem);
  });
};

const deleteTodoItem = async (req, res) => {
  // find single todo by ID and delete from mongoDB
  await Todo.findOneAndDelete({_id: req.params.id}, (err, todo)=>{
    if (err) {
        return res.status(400).json({ success: false, error: err })
        //console.log(err)
    }

    if (!todo) {
        return res
            .status(404)
            .json({ success: false, error: `Movie not found` })
    }  
    return res.send('todo deleted');
  });
  
};

module.exports = {
  getTodoList,
  getTodoById,
  updateTodoItem,
  createTodo,
  deleteTodoItem,
};

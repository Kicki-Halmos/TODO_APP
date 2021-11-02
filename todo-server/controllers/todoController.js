/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

const Todo = require('../models/Todo');

const getTodoList = async (id) => {
  // get todolist from mongodb
  try {
    const todoList = await Todo.find({ userId: id }).exec();
    return { status: 200, success: true, data: todoList };
  } catch (error) {
    return { status: 404, success: false, error: 'Todo-list not found' };
  }
};

const getTodoById = async (id) => {
  // get single todo by ID from mongodb
  try {
    const todoItem = await Todo.findOne({ _id: id })
      .exec();
    return { status: 200, success: true, data: todoItem };
  } catch (error) {
    return { status: 404, success: false, error: 'Todo item not found' };
  }
};

const updateTodoItem = async (id, body) => {
  // update todo item and post to mongodDB
  if (!body) return { status: 400, success: false, error: 'You must provide a body to update' };

  try {
    const updatedItem = await Todo.findByIdAndUpdate(id, {
      title: body.title,
      body: body.body,
    }, { new: true })
      .exec();
    return {
      status: 200,
      success: true,
      data: updatedItem,
      message: 'Todo item was updated',
    };
  } catch (error) {
    return { status: 400, success: false, error: 'Todo item was not updated' };
  }
};

const createTodo = async (id, body) => {
  // post todo item to mongoDB
  if (!body) return { status: 400, success: false, error: 'You must provide a todo item' };

  try {
    const todoItem = await new Todo({
      title: body.title.title,
      body: body.title.body,
      userId: id,
    });
    todoItem
      .save();
    return {
      status: 200,
      success: true,
      id: todoItem._id,
      message: 'Todo item created',
      data: todoItem,
    };
  } catch (error) {
    return {
      status: 400, success: false, error, message: 'Todo item not created',
    };
  }
};

const deleteTodoItem = async (id) => {
  // find single todo by ID and delete from mongoDB
  try {
    await Todo.findOneAndDelete({ _id: id })
      .exec();
    return { status: 200, success: true, message: 'Todo item deleted' };
  } catch (error) {
    return { status: 400, success: false, error };
  }
};

module.exports = {
  getTodoList,
  getTodoById,
  updateTodoItem,
  createTodo,
  deleteTodoItem,
};

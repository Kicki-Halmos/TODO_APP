/* eslint-disable no-underscore-dangle */
const express = require('express');
const todoCtrl = require('../controllers/todoController');

const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.get('/api/todo-list', requireAuth, async (req, res) => {
  const id = await req.user._id;
  const result = await todoCtrl.getTodoList(id);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

router.get('/api/todo-list/:id', requireAuth, async (req, res) => {
  const result = await todoCtrl.getTodoById(req.params.id);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

router.post('/api/todo-list', requireAuth, async (req, res) => {
  const result = await todoCtrl.createTodo(req.user._id, req.body);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

router.put('/api/todo-list/:id', requireAuth, async (req, res) => {
  const result = await todoCtrl.updateTodoItem(req.params.id, req.body);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

router.delete('/api/todo-list/:id', requireAuth, async (req, res) => {
  const result = await todoCtrl.deleteTodoItem(req.params.id);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

module.exports = router;

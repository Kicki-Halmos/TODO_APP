const express = require("express");
const mongoose = require("mongoose");
const todoCtrl = require("../controllers/todoController");

const router = express.Router();

router.get("/todo-list", todoCtrl.getTodoList);

router.get("/todo-list/:id", todoCtrl.getTodoById);

router.post("/todo-list", todoCtrl.createTodo);

router.post("/todo-list/:id", todoCtrl.updateTodoItem);

router.delete("/todo-list/:id", todoCtrl.deleteTodoItem);

module.exports = router;

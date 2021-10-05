const express = require("express");
const mongoose = require("mongoose");
const todoCtrl = require("../controllers/todoController");

const router = express.Router();

router.get("/api/todo-list", todoCtrl.getTodoList);

router.get("/api/todo-list/:id", todoCtrl.getTodoById);

router.post("/api/todo-list", todoCtrl.createTodo);

router.put("/api/todo-list/:id", todoCtrl.updateTodoItem);

router.delete("/api/todo-list/:id", todoCtrl.deleteTodoItem);

module.exports = router;

const express = require("express");
const todoCtrl = require("../controllers/todoController");

const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();
//router.use(requireAuth);

router.get("/api/todo-list", requireAuth, todoCtrl.getTodoList);

router.get("/api/todo-list/:id", requireAuth, todoCtrl.getTodoById);

router.post("/api/todo-list", requireAuth, todoCtrl.createTodo);

router.put("/api/todo-list/:id", requireAuth, todoCtrl.updateTodoItem);

router.delete("/api/todo-list/:id", requireAuth, todoCtrl.deleteTodoItem);

module.exports = router;

const getTodoList = (req, res) => {
  // get todolist from mongodb

  return res.send("Here is your todo-list");
};

const getTodoById = (req, res) => {
  // get single todo by ID from mongodb
  return res.send("Here is a single todo by ID");
};

const updateTodoItem = (req, res) => {
  // update todo item and post to mongodDB
  return;
};

const createTodo = (req, res) => {
  // post todo item to mongoDB
  return;
};

const deleteTodoItem = () => {
  // find single todo by ID and delete from mongoDB
  return;
};

module.exports = {
  getTodoList,
  getTodoById,
  updateTodoItem,
  createTodo,
  deleteTodoItem,
};

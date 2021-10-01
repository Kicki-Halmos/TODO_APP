import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addTodoItem = (title, body) => api.post("/todo-list", {title, body});
export const getTodoList = () => api.get("/todo-list");
export const updateTodoItem = (id, title, body) => api.put(`/todo-list/${id}`, {title, body});
export const deleteTodoItem = (id) => api.delete(`/todo-list/${id}`);
//export const getTodoitem = (id) => api.get(`/todo-list/${id}`);

const apis = {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  //getTodoitem,
};

export default apis;

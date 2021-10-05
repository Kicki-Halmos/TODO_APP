import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addTodoItem = (title, body) => api.post("/api/todo-list", {title, body});
export const getTodoList = () => api.get("/api/todo-list");
export const updateTodoItem = (id, title, body) => api.put(`/api/todo-list/${id}`, {title, body});
export const deleteTodoItem = (id) => api.delete(`/api/todo-list/${id}`);
export const getTodoitem = (id) => api.get(`/api/todo-list/${id}`);

const apis = {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  getTodoitem,
};

export default apis;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addTodoItem = (payload) => api.post("/todo-list", payload);
export const getTodoList = () => api.get("/todo-list");
export const updateTodoItem = (id, payload) => api.get(`/todo-list/${id}`, payload);
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

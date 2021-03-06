/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://limitless-hollows-99215.herokuapp.com/',
});

export const addTodoItem = (title, body) => api.post('/api/todo-list', { title, body });

export const getTodoList = () => api.get('/api/todo-list');
export const updateTodoItem = (id, title, body) => api.put(`/api/todo-list/${id}`, { title, body });
export const deleteTodoItem = (id) => api.delete(`/api/todo-list/${id}`);
export const getTodoitem = (id) => api.get(`/api/todo-list/${id}`);

export const signup = (email, password) => api.post('/api/signup', { email, password });

export const login = (email, password) => api.post('/api/login', { email, password });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

export const todoApis = {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  getTodoitem,
};

export const userApis = {
  signup, login,
};

export default api;

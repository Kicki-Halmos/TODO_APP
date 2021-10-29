/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },

  reducers: {
    getTodoList(state, action) {
      state.todoList = action.payload.todoList;
    },

    addTodoItem(state, action) {
      const newItem = action.payload.todoItem;
      state.todoList.push(newItem);
    },

    updateTodoItem(state, action) {
      const { updatedItem } = action.payload;
      state.todoList.map((item) => (item._id === updatedItem._id
        ? action.payload
        : item));
    },

    deleteTodoItem(state, action) {
      const { id } = action.payload;
      state.todoList = state.todoList.filter((item) => item._id !== id);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;

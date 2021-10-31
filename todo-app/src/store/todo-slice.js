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
      state.todoList.push(action.payload.todoItem);
    },

    updateTodoItem(state, action) {
      const updatedList = state.todoList.map((item) => (item._id === action.payload.updatedItem._id
        ? action.payload.updatedItem
        : item));

      state.todoList = updatedList;
    },

    deleteTodoItem(state, action) {
      const { id } = action.payload;
      state.todoList = state.todoList.filter((item) => item._id !== id);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;

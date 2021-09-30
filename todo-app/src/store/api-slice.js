import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    todoList: [],
  },

  reducers: {
    getTodoList(state, action) {
      state.todoList = action.payload.todoList;
    },

    addTodoItem(state, action) {
      const newItem = action.payload;
      state.todoList.push(newItem);
    },

    updateTodoItem(state, action) {
      const id = action.payload.id;
      state.todoList.map((item) => {
        return item.id === id ? action.payload : item;
      });
    },

    deleteTodoItem(state, action) {
      const id = action.payload.id;
      state.filter((item) => item.id !== id);
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice



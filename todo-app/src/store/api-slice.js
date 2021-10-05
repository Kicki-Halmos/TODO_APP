import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    todoList: [],
  },

  reducers: {
    getTodoList(state, action) {
      state.todoList = action.payload.todoList;
      console.log(state.todoList);
    },

    addTodoItem(state, action) {
      const newItem = action.payload.todoItem;
      state.todoList.push(newItem);
    },

    updateTodoItem(state, action) {
      const id = action.payload.id;
      state.todoList.map((item) => {
        return item._id === id
          ? { title: action.payload.title, body: action.payload.body }
          : item;
      });
    },

    deleteTodoItem(state, action) {
      const id = action.payload.id;
      console.log(id);
      state.todoList = state.todoList.filter((item) => item._id !== id);
      console.log(state.todoList);
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice;

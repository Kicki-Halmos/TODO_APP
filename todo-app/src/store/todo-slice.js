import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    errorMessage: ""
  },

  reducers: {
    getTodoList(state, action) {
      state.todoList = action.payload.todoList;
      console.log(state.errorMessage);
    },

    addTodoItem(state, action) {
      const newItem = action.payload.todoItem;
      state.todoList.push(newItem);
    },

    updateTodoItem(state, action) {
      console.log('hej');
      const id = action.payload.id;
      console.log(action.payload);
      state.todoList.map((item) => {
        return item._id === id
          ? { title: action.payload.title, body: action.payload.body }
          : item;
      });
    },

    deleteTodoItem(state, action) {
      const id = action.payload.id;
      console.log(action.payload);
      console.log(id);
      state.todoList = state.todoList.filter((item) => item._id !== id);
      console.log(state.todoList);
    },
    addErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage;
      console.log(state.errorMessage);
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;

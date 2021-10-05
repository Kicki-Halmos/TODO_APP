import { apiActions } from "./api-slice";
import api from "../api/api";

const {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  getTodoitem,
} = api;

export const fetchTodoList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await getTodoList();

      if (response.statusText !== "OK") {
        throw new Error("Could not fetch todo list!");
      }
      const data = response.data;

      return data;
    };

    try {
      const todoList = await fetchData();
      dispatch(
        apiActions.getTodoList({
          todoList: todoList.data || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTodoItem = (id) => {
  return async () => {
    
      const response = await getTodoitem(id);

      if (response.statusText !== "OK") {
        throw new Error("Could not get todo item!");
      }
      const todoItem = response.data;

      //console.log(todoItem);

      return todoItem;
    };

    
  };


export const postTodoItem = (title, body) => {
  //console.log(title);
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await addTodoItem({
        title,
        body,
      });

      if (response.statusText !== "OK") {
        throw new Error("Could not post todo item!");
      }

      const data = response.data;
      return data.data;
    };

    try {
      const todoItem = await fetchData();
      dispatch(
        apiActions.addTodoItem({
          todoItem,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const putTodoItem = (id, title, body) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await updateTodoItem(id, title, body);

      if (response.statusText !== "OK") {
        throw new Error("Could not update todo item!");
      }
    };

    try {
      const todoItem = await fetchData();
      dispatch(
        apiActions.updateTodoItem({
          id,
          title,
          body,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeTodoItem = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await deleteTodoItem(id);

      if (response.statusText !== "OK") {
        throw new Error("Could not delete todo item");
      }
    };

    try {
      await fetchData();
      dispatch(
        apiActions.deleteTodoItem({
          id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
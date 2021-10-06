import { todoActions } from "./todo-slice";
import { todoApis } from "../api/api";

const {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  getTodoitem,
} = todoApis;

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
        todoActions.getTodoList({
          todoList: todoList.data || [],
        })
      );
    } catch (error) {
      dispatch(
        todoActions.addErrorMessage({
          errorMessage: error.response.data.error,
        })
      );
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
        todoActions.addTodoItem({
          todoItem,
        })
      );
    } catch (error) {
      console.log(error.response);
      dispatch(
        todoActions.addErrorMessage({
          errorMessage: error,
        })
      );
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
      await fetchData();
      dispatch(
        todoActions.updateTodoItem({
          id,
          title,
          body,
        })
      );
    } catch (error) {
      dispatch(
        todoActions.addErrorMessage({
          errorMessage: error.response.data.error,
        })
      );
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
        todoActions.deleteTodoItem({
          id,
        })
      );
    } catch (error) {
      dispatch(
        todoActions.addErrorMessage({
          errorMessage: error.response.data.error,
        })
      );
    }
  };
};

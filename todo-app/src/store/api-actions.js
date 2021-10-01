import { apiActions } from "./api-slice";
import api from "../api/api";
import { getTodoList } from "../api/api";

/*const { addTodo, getTodoList, updateTodoItem, deletTodoItem, getTodoItem } =
  api;*/

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await getTodoList();
      console.log(response);

     if (response.statusText !== "OK") {
        throw new Error("Could not fetch todo list!");
      }
      const data =  response.data;
      //console.log('data?' + data.data)
      return data;
    };

    try {
      const todoList = await fetchData();
      dispatch(
        apiActions.getTodoList({
          todoList: todoList || [],
        })
      );
    } catch (error) {
        console.log(error);
    }
  };
};

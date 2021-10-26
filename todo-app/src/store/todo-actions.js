import { todoActions } from './todo-slice';
import { todoApis } from '../api/api';
import { userActions } from './user-slice';

const {
  addTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
  getTodoitem,
} = todoApis;

export const fetchTodoList = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await getTodoList();

    if (response.statusText !== 'OK') {
      throw new Error('Could not fetch todo list!');
    }
    const { data } = response;

    return data;
  };

  try {
    const todoList = await fetchData();
    dispatch(
      todoActions.getTodoList({
        todoList: todoList.data || [],
      }),
    );
  } catch (error) {
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

export const fetchTodoItem = (id) => async () => {
  const response = await getTodoitem(id);

  if (response.statusText !== 'OK') {
    throw new Error('Could not fetch todo item!');
  }
  const todoItem = response.data;

  return todoItem;
};

export const postTodoItem = (title, body) => async (dispatch) => {
  const fetchData = async () => {
    const response = await addTodoItem({
      title,
      body,
    });

    if (response.statusText !== 'OK') {
      throw new Error('Could not post todo item!');
    }

    const { data } = response;
    return data.data;
  };

  try {
    const todoItem = await fetchData();
    dispatch(
      todoActions.addTodoItem({
        todoItem,
      }),
    );
  } catch (error) {
    console.log(error.response);
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

export const putTodoItem = (id, title, body) => async (dispatch) => {
  const fetchData = async () => {
    const response = await updateTodoItem(id, title, body);

    if (response.statusText !== 'OK') {
      throw new Error('Could not update todo item!');
    }
  };

  try {
    await fetchData();
    dispatch(
      todoActions.updateTodoItem({
        id,
        title,
        body,
      }),
    );
  } catch (error) {
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

export const removeTodoItem = (id) => async (dispatch) => {
  const fetchData = async () => {
    const response = await deleteTodoItem(id);

    if (response.statusText !== 'OK') {
      throw new Error('Could not delete todo item');
    }
  };

  try {
    await fetchData();
    dispatch(
      todoActions.deleteTodoItem({
        id,
      }),
    );
  } catch (error) {
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

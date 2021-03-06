import { userActions } from './user-slice';
import { userApis } from '../api/api';
import history from '../utils/history';
import { todoActions } from './todo-slice';

const { signup, login } = userApis;

export const tryLocalLogin = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(
      userActions.login({
        token,
      }),
    );
  } else {
    history.push('/login');
  }
};

export const postSignup = (email, password) => async (dispatch) => {
  const fetchData = async () => {
    const response = await signup(email, password);

    if (response.statusText !== 'OK') {
      throw new Error('Could not signup user');
    }

    const { data } = response;
    localStorage.setItem('token', data.data.token);

    return data;
  };

  try {
    const user = await fetchData();
    dispatch(
      userActions.signup({
        token: user.data.token,
      }),
    );
    history.push('/todo-list');
  } catch (error) {
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

export const postLogin = (email, password) => async (dispatch) => {
  const fetchData = async () => {
    const response = await login(email, password);

    if (response.statusText !== 'OK') {
      throw new Error('Could not signup user');
    }

    const { data } = response;
    localStorage.setItem('token', data.data.token);
    return data;
  };

  try {
    const user = await fetchData();
    dispatch(
      userActions.login({
        token: user.data.token,
      }),
    );
    history.push('/todo-list');
  } catch (error) {
    dispatch(
      userActions.addErrorMessage({
        errorMessage: error.response.data.error,
      }),
    );
  }
};

export const logout = () => (dispatch) => {
  dispatch(userActions.logout());
  dispatch(todoActions.clearTodoList());
  localStorage.removeItem('token');
  history.push('/login');
};

export const clearErrorMessage = () => (dispatch) => {
  dispatch(userActions.clearErrorMessage());
};

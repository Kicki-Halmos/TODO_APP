import { userActions } from "./user-slice";
import { userApis } from "../api/api";
import history from "../utils/history";

const { signup, login } = userApis;

export const tryLocalLogin = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(
      userActions.login({
        token,
      })
    );
  } else {
    history.push("/login");
  }
};

export const postSignup = (email, password) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await signup(email, password);

      if (response.statusText !== "OK") {
        throw new Error("Could not signup user");
      }

      const data = response.data;
      localStorage.setItem("token", data.data.token);

      return data;
    };

    try {
      const user = await fetchData();
      dispatch(
        userActions.signup({
          token: user.data.token,
        })
      );
      history.push("/");
    } catch (error) {
      dispatch(
        userActions.addErrorMessage({
          errorMessage: error.response.data.error,
        })
      );
    }
  };
};

export const postLogin = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await login(email, password);

      if (response.statusText !== "OK") {
        throw new Error("Could not signup user");
      }

      const data = response.data;
      localStorage.setItem("token", data.data.token);

      return data;
    };

    try {
      const user = await fetchData();
      dispatch(
        userActions.login({
          token: user.data.token,
        })
      );
      history.push("/");
    } catch (error) {
      console.log(error.response)
      dispatch(
        userActions.addErrorMessage({
          errorMessage: error.response.data.error,
        })
      );
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(userActions.logout())
    localStorage.removeItem("token");
    history.push('/login');
  }
}

export const clearErrorMessage = () => {
  return (dispatch) => {
    dispatch(userActions.clearErrorMessage());
  };
};

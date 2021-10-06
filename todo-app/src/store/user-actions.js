import { userActions } from "./user-slice";
import { userApis } from "../api/api";

const { signup, login } = userApis;

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
    } catch (error) {
      dispatch(
        userActions.addError({
          errorMessage: error,
        })
      );
    }
  };
};

export const postLogin = (email, password) => {
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
    } catch (error) {
      dispatch(
        userActions.addError({
          errorMessage: error,
        })
      );
    }
  };
};

export const clearErrorMessage = () => {
  return (dispatch) => {
    dispatch(userActions.clearErrorMessage());
  };
};

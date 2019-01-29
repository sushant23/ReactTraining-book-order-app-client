import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER_SUCCESS
} from "../../constants/actionTypes";
import { login as loginAPI } from "../../api";
import { startPath as defaultStartPath } from "../../constants/defaultValues";

export const login = (data, history) => {
  return dispatch => {
    loginAPI(data)
      .then(user => {
        dispatch(loginSuccess(user));
        localStorage.setItem("user", JSON.stringify(user));
        history.push(defaultStartPath);
      })
      .catch(err => {
        dispatch(loginError(err.message));
      });
  };
};

export const loginSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  user
});

export const loginError = message => ({
  type: LOGIN_USER_ERROR,
  message
});

export const logout = history => {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch(logoutSuccess());
  };
};

export const logoutSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});

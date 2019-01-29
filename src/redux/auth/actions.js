import { LOGIN_USER } from "../../constants/actionTypes";

export const login = data => {
  return {
    type: LOGIN_USER,
    data
  };
};

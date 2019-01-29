import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "../../constants/actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  loginError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user, loginError: null };
    case LOGIN_USER_ERROR:
      return { ...state, loginError: action.message };
    case LOGOUT_USER_SUCCESS:
      return { ...state, user: null };
    default:
      return state;
  }
};

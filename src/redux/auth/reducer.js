import { LOGIN_USER_SUCCESS } from "../../constants/actionTypes";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

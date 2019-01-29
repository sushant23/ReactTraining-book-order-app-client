import { GET_BOOKS_SUCCESS, GET_BOOK_SUCCESS } from "../../constants/actionTypes";

const initialState = {
  list: [],
  detail: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return { ...state, list: action.books };
    case GET_BOOK_SUCCESS:
      return { ...state, detail: action.book };
    default:
      return state;
  }
};

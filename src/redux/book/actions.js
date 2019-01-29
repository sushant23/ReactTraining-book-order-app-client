import { createAuthenticatedAction } from "../actions";
import {
  createBook as createBookAPI,
  getBooks as getBooksAPI,
  getBook as getBookAPI,
  updateBook as updateBookAPI,
  deleteBook as deleteBookAPI
} from "../../api";
import {
  CREATE_BOOK_SUCCESS,
  GET_BOOKS_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  GET_BOOK_SUCCESS
} from "../../constants/actionTypes";

export const createBook = (history, data) => {
  return createAuthenticatedAction((dispatch, token) => {
    createBookAPI(token, data).then(book => {
      history.push("/book");
      dispatch(createBookSuccess(book));
    });
  });
};

export const getBooks = () => {
  return createAuthenticatedAction((dispatch, token) => {
    getBooksAPI(token).then(books => {
      dispatch(getBooksSuccess(books));
    });
  });
};

export const getBook = id => {
  return createAuthenticatedAction((dispatch, token) => {
    getBookAPI(token, id).then(book => {
      dispatch(getBookSuccess(book));
    });
  });
};

export const updateBook = (history, id, data) => {
  return createAuthenticatedAction((dispatch, token) => {
    updateBookAPI(token, id, data).then(book => {
      history.push(`/book/${id}`);
      dispatch(updateBookSuccess(book));
    });
  });
};

export const deleteBook = (history, id) => {
  return createAuthenticatedAction((dispatch, token) => {
    deleteBookAPI(token, id).then(book => {
      history.push(`/book`);
      dispatch(deleteBookSuccess(book));
    });
  });
};

export const createBookSuccess = book => ({ type: CREATE_BOOK_SUCCESS, book });
export const getBooksSuccess = books => ({ type: GET_BOOKS_SUCCESS, books });
export const getBookSuccess = book => ({ type: GET_BOOK_SUCCESS, book });
export const updateBookSuccess = book => ({ type: UPDATE_BOOK_SUCCESS, book });
export const deleteBookSuccess = book => ({ type: DELETE_BOOK_SUCCESS, book });

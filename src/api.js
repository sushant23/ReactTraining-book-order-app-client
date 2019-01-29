import axios from "axios";
import { API_URL } from "./constants/defaultValues";

const createUrl = path => `${API_URL}${path}`;

const dataFromResponse = resp => resp.data;
const getProperErrorObject = err =>
  err.response && err.response.data
    ? err.response.data
    : { message: "Unknown error" };
const createAuthorizationHeader = token => ({
  Authorization: `Bearer ${token}`
});

const getRequest = (path, params, headers) =>
  axios
    .get(createUrl(path), {
      params,
      headers
    })
    .then(dataFromResponse)
    .catch(err => {
      throw getProperErrorObject(err);
    });
const postRequest = (path, params, body, headers) =>
  axios
    .post(createUrl(path), body, {
      params,
      headers
    })
    .then(dataFromResponse)
    .catch(err => {
      throw getProperErrorObject(err);
    });

const putRequest = (path, params, body, headers) =>
  axios
    .put(createUrl(path), body, {
      params,
      headers
    })
    .then(dataFromResponse)
    .catch(err => {
      throw getProperErrorObject(err);
    });

const deleteRequest = (path, params, headers) =>
  axios
    .delete(createUrl(path), {
      params,
      headers
    })
    .then(dataFromResponse)
    .catch(err => {
      throw getProperErrorObject(err);
    });

export const login = data =>
  postRequest("auth/login", null, {
    username: data.email,
    password: data.password
  });

// Book API
export const getBooks = token =>
  getRequest("book", null, createAuthorizationHeader(token));

export const getBook = (token, id) =>
  getRequest(`book/${id}`, null, createAuthorizationHeader(token));

export const createBook = (token, data) =>{
  return postRequest("book", null, data, createAuthorizationHeader(token));
}

export const updateBook = (token, id, data) =>
  putRequest(`book/${id}`, null, data, createAuthorizationHeader(token));

export const deleteBook = (token, id) =>
  deleteRequest(`book/${id}`, null, createAuthorizationHeader(token));

// Order API
export const getOrders = token =>
  getRequest("order", null, createAuthorizationHeader(token));

export const getOrder = (token, id) =>
  getRequest(`order/${id}`, null, createAuthorizationHeader(token));

export const createOrder = (token, data) =>
  postRequest("order", null, data, createAuthorizationHeader(token));

export const updateOrder = (token, id, data) =>
  putRequest(`order/${id}`, null, data, createAuthorizationHeader(token));

export const deleteOrder = (token, id) =>
  deleteRequest(`order/${id}`, null, createAuthorizationHeader(token));

import axios from "axios";
import { API_URL } from "./constants/defaultValues";

const createUrl = path => `${API_URL}${path}`;

const getProperErrorObject = err =>
  err.response && err.response.data
    ? err.response.data
    : { message: "Unknown error" };

const getRequest = (path, params) =>
  axios.get(createUrl(path), params).catch(err => {
    throw getProperErrorObject(err);
  });
const postRequest = (path, params, body) =>
  axios.post(createUrl(path), body, params).catch(err => {
    throw getProperErrorObject(err);
  });

const putRequest = (path, params, body) =>
  axios.put(createUrl(path), params, body).catch(err => {
    throw getProperErrorObject(err);
  });

const deleteRequest = (path, params) =>
  axios.delete(createUrl(path), params).catch(err => {
    throw getProperErrorObject(err);
  });

export const login = data =>
  postRequest("auth/login", null, {
    username: data.email,
    password: data.password
  });

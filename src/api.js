import axios from "axios";
import { API_URL } from "./constants/defaultValues";

const createUrl = path => `${API_URL}${path}`;

const getRequest = (path, params) => axios.get(createUrl(path), params);

const postRequest = (path, params, body) =>
  axios.post(createUrl(path), body, params);

const putRequest = (path, params, body) =>
  axios.put(createUrl(path), params, body);

const deleteRequest = (path, params) => axios.delete(createUrl(path), params);

export const login = data =>
  postRequest("auth/login", null, {
    username: data.email,
    password: data.password
  });

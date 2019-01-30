import { createAuthenticatedAction } from "../actions";
import {
  createOrder as createOrderAPI,
  getOrders as getOrdersAPI,
  getOrder as getOrderAPI,
  updateOrder as updateOrderAPI,
  deleteOrder as deleteOrderAPI
} from "../../api";
import {
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_SUCCESS,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
  GET_ORDER_SUCCESS
} from "../../constants/actionTypes";

export const createOrder = (history, data) => {
  return createAuthenticatedAction((dispatch, token) => {
    createOrderAPI(token, data).then(order => {
      history.push("/order");
      dispatch(createOrderSuccess(order));
    });
  });
};

export const getOrders = () => {
  return createAuthenticatedAction((dispatch, token) => {
    getOrdersAPI(token).then(orders => {
      dispatch(getOrdersSuccess(orders));
    });
  });
};

export const getOrder = id => {
  return createAuthenticatedAction((dispatch, token) => {
    getOrderAPI(token, id).then(order => {
      dispatch(getOrderSuccess(order));
    });
  });
};

export const updateOrder = (history, id, data) => {
  return createAuthenticatedAction((dispatch, token) => {
    updateOrderAPI(token, id, data).then(order => {
      history.push(`/order/${id}`);
      dispatch(updateOrderSuccess(order));
    });
  });
};

export const deleteOrder = (history, id) => {
  return createAuthenticatedAction((dispatch, token) => {
    deleteOrderAPI(token, id).then(order => {
      history.push(`/order`);
      dispatch(deleteOrderSuccess(order));
    });
  });
};

export const createOrderSuccess = order => ({ type: CREATE_ORDER_SUCCESS, order });
export const getOrdersSuccess = orders => ({ type: GET_ORDERS_SUCCESS, orders });
export const getOrderSuccess = order => ({ type: GET_ORDER_SUCCESS, order });
export const updateOrderSuccess = order => ({ type: UPDATE_ORDER_SUCCESS, order });
export const deleteOrderSuccess = order => ({ type: DELETE_ORDER_SUCCESS, order });

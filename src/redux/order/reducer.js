import { GET_ORDERS_SUCCESS, GET_ORDER_SUCCESS } from "../../constants/actionTypes";

const initialState = {
  list: [],
  detail: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return { ...state, list: action.orders };
    case GET_ORDER_SUCCESS:
      return { ...state, detail: action.order };
    default:
      return state;
  }
};

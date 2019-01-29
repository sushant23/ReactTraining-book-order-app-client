import { combineReducers } from "redux";
import auth from "./auth/reducer";
import book from "./book/reducer";
import order from "./order/reducer";

const reducers = combineReducers({
  auth,
  book,
  order
});

export default reducers;

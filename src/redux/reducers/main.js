import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const rootreducer = combineReducers({
  cartReducer
});

export default rootreducer;
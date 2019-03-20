import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import User from "./User";

export default combineReducers({
  routing: routerReducer,
  User
});

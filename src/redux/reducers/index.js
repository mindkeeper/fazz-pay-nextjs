import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import historyReducer from "./history";
import topUpReducer from "./topUp";
import userReducer from "./user";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  history: historyReducer,
  topUp: topUpReducer,
});

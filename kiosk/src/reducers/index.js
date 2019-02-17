import { combineReducers } from "redux";
import userReducer from "./userReducer";
import exampleReducer from "./exampleReducer";

export default combineReducers({
  user: userReducer,
  example: exampleReducer
});

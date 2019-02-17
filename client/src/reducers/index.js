import { combineReducers } from "redux";
import userReducer from "./userReducer";
import exampleReducer from "./exampleReducer";
import ridesReducer from "./ridesReducer";

export default combineReducers({
  user: userReducer,
  rides: ridesReducer
});

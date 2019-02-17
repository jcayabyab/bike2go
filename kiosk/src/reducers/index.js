import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ridesReducer from "./ridesReducer";

export default combineReducers({
  user: userReducer,
  rides: ridesReducer
});

import { FETCH_USER } from "../actions/types";

// specify based on model later
const emptyUser = {
  firstName: null,
  lastName: null,
  _id: null,
  userId: null
};

export default function(state = emptyUser, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

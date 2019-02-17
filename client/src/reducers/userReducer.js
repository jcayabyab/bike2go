import { FETCH_USER } from "../actions/types";

// specify based on model later
const emptyUser = {
  firstName: null,
  lastName: null,
  _id: null,
  userId: null,
  personId: null,
  totalDistance: 0,
  totalTime: 0,
  balance: 0
};

export default function(state = emptyUser, action) {
  switch (action.type) {
    case FETCH_USER: {
      console.log(action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}

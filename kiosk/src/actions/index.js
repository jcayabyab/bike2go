import axios from "axios";
import { FETCH_USER, FETCH_EXAMPLE, FETCH_RIDES } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchExample = () => async dispatch => {
  const res = await axios.get("/example");
  dispatch({ type: FETCH_EXAMPLE, payload: res.data });
};

export const clearUser = () => async dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: {
      firstName: null,
      lastName: null,
      _id: null,
      userId: null,
      personId: null,
      totalDistance: 0,
      totalTime: 0,
      balance: 0
    }
  });
};

export const createNewFace = (input, userId) => async dispatch => {
  const res = await axios.post("/api/face/new", { input, id: userId });
  // dispatch({ type: FETCH_USER, payload: res.data });
};

export const checkFace = input => async dispatch => {
  let res;
  if (input) {
    res = await axios.post("/api/face/identify", { input });
    dispatch({ type: FETCH_USER, payload: res.data });
  }
};

export const createNewRide = userId => async dispatch => {
  const res = await axios.post("/api/ride/new", { id: userId });
  dispatch({ type: FETCH_USER, payload: res.data.user });
  dispatch({ type: FETCH_RIDES, payload: res.data.rides });
};

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

export const createNewFace = (input, userId) => async dispatch => {
  const res = await axios.post("/api/face/new", { input, id: userId });
  // dispatch({ type: FETCH_USER, payload: res.data });
};

export const checkFace = input => async dispatch => {
  if (input) {
    const res = await axios.post("/api/face/identify", { input });
    // dispatch({ type: FETCH_USER, payload: res.data });
  }
};

export const createNewRide = userId => async dispatch => {
  console.log(userId);
  const res = await axios.post("/api/ride/new", { id: userId });
  dispatch({ type: FETCH_USER, payload: res.data.user });
  dispatch({ type: FETCH_RIDES, payload: res.data.rides });
};

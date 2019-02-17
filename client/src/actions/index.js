import axios from "axios";
import { FETCH_USER, FETCH_EXAMPLE } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchExample = () => async dispatch => {
  const res = await axios.get("/example");
  dispatch({ type: FETCH_EXAMPLE, payload: res.data });
};

export const checkFace = (input, userId) => async dispatch => {
  const res = await axios.post("/api/face/new", { input, id: userId });
  // dispatch({ type: FETCH_USER, payload: res.data });
};

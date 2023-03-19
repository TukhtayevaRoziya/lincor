import { GET_HOME } from "./types";

export const home_info = (data) => (dispatch) => {
  dispatch({ type: GET_HOME, payload: data });
};
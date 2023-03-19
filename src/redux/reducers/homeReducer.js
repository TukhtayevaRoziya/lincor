import { GET_HOME } from "../actions/types";

const initialState = {
  data: {},
};

export const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HOME:
      return {
        data: payload,
      };
    default:
      return state;
  }
};

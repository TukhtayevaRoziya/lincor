import { GET_STUDENTS } from "../actions/types";

const initialState = {
  data: {},
};

export const studentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS:
      return {
        data: payload,
      };
    default:
      return state;
  }
};

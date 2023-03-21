import api from './../../utility/api';

export const getAction =
  (path, actionType) => async (dispatch) => {
    try {
      const res = await api.get(path);
      dispatch({
        type: actionType,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

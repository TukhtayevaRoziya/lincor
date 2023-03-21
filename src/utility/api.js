import axios from "axios";

import { LOGOUT } from "../redux/actions/types";
import { store } from "../redux/store";

const api = axios.create({
  baseURL: "https://api.lincor.uz/api/v1/" || process.env.REACT_APP_API_URL,
  // baseURL: process.env.REACT_APP_API_URL ,
  headers: {
    "Content-Type": "application/json",
    "autharization": process.env.REACT_APP_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkNDZjNzg1LTNlZTEtNGJhNS04MDk3LWVmODI5NGMxYTJiZiIsImVtYWlsIjoiYWhtYWRqb25vdmFrbWFsMDc5QGdtYWlsLmNvbSIsImlhdCI6MTY3OTE2MzU3MX0.Ri2pJlrmS0w2yMSyze-zoWVVbDyeRVCe5N-SLn-N0P4',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;

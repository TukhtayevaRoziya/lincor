import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

// import authToken from '../utility/authToken'
import { authReducer } from './reducers/authReducer'
import { homeReducer } from './reducers/homeReducer';
import { studentsReducer } from './reducers/studentsReducer';

export const store = configureStore({
  reducer: {
    authReducer,
    homeReducer,
    studentsReducer,
  },
  middleware: [thunk],
})

// window.store = store;

// let currentState = store.getState()

// store.subscribe(() => {
//   let previousState = currentState
//   currentState = store.getState()
//   if (previousState.authReducer.token !== currentState.authReducer.token) {
//     const token = currentState.authReducer.token
//     authToken(token)
//   }
// })

export default store


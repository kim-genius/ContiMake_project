import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './index.js';
import sessionReducer from './session.js'
export const store = configureStore({
    reducer: {
      cur_project : projectReducer,
      session :sessionReducer
    },
  
  })


export default store
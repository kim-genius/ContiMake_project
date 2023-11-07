import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './index.js';

export const store = configureStore({
    reducer: {
      cur_project : projectReducer,
    },
  
  })


export default store
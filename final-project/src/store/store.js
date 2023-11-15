import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './index.js';
import sessionReducer from './session.js'
import canvasReducer from './canvasSlice.js'

export const store = configureStore({
  reducer: {
    cur_project: projectReducer,
    session: sessionReducer,
    canvas_slice: canvasReducer,
  },

})


export default store
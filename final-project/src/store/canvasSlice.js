import { createSlice } from "@reduxjs/toolkit";

const canvasState = createSlice({
    name: 'canvas_slice',

    initialState : {
        allowType : 'touch',
    },
    
    reducers : {
        setBrushState : (state,action) => {
            // state.allowType = action.payload;
                if (state.allowType == 'touch') {
                  state.allowType = 'all'
                } else {
                  state.allowType = 'touch'
                }
        },
    }
})

export const { setBrushState } = canvasState.actions;

export default canvasState.reducer;
import { createSlice } from '@reduxjs/toolkit'

const predictionState = createSlice({

    name : 'prediction_inpainting',

    initialState : {
        curIdx : 0,
        prediction: "",
        lastPrediction: "",
        curPrompt: ""
    },
    reducers : {
        setCurIdx : (state,action) => {
            state.curIdx = action.payload;
        },
        setPrediction : (state, action) => {
            state.prediction = action.payload;
        },
        setLastPrediction : (state, action) => {
            state.lastPrediction = action.payload;
        },
        setCurPrompt : (state,action) => {
            state.curPrompt = action.payload;
        }
    }
})

export const { setCurIdx, setPrediction, setLastPrediction, setCurPrompt } = predictionState.actions;
export default predictionState.reducer;
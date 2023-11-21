import { createSlice } from '@reduxjs/toolkit'

// generate, edit
const projectState = createSlice({

  // 슬라이스의 이름 정의
  name: 'cur_project',

  // 초기 상태
  initialState: {
    title: '제목없음',
    imgNums: 1,
    prompts: [],
    images: [],
    mask: [],
    curIdx: 0,
    prediction: "",
    lastPrediction: "",
    curPrompt: ""
  },

  // 액션 처리
  reducers: {
    setCurrentTitle: (state, action) => {
      state.title = action.payload;
    },
    setCurrentImgNum: (state, action) => {
      state.imgNums = action.payload;
    },
    setPrompt: (state, action) => {
      state.prompts = action.payload;
    },
    setImages: (state, action) => {
      return { ...state, images: action.payload };
    },
    setMask: (state, action) => {
      state.mask = action.payload;
    },

    setCurIdx: (state, action) => {
      state.curIdx = action.payload;
    },
    setPrediction: (state, action) => {
      state.prediction = action.payload;
    },
    setLastPrediction: (state, action) => {
      state.lastPrediction = action.payload;
    },
    setCurPrompt: (state, action) => {
      state.curPrompt = action.payload;
    }
  }
}
)

export const { 
  setCurrentTitle, setCurrentImgNum, setPrompt, setImages, 
  setMask, setCurIdx, setPrediction, setLastPrediction, setCurPrompt
 } = projectState.actions;

export default projectState.reducer;

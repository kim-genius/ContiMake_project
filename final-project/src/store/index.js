import { createSlice } from '@reduxjs/toolkit'

// generate, edit
const projectState = createSlice({

  // 슬라이스의 이름 정의
  name : 'cur_project',

  // 초기 상태
  initialState : {
    title: '제목없음',
    imgNums: 0,
    prompts: []
  },

  // 액션 처리
  reducers : {
    setCurrentTitle : (state,action) => {
      state.title = action.payload;
    },
    setCurrentImgNum : (state,action) => {
      state.imgNums = action.payload;
    },
    setPrompt : (state,action) =>{
      state.prompts = action.payload
    }
  }
}
)

export const { setCurrentTitle,setCurrentImgNum,setPrompt } = projectState.actions;

export default projectState.reducer;



import { createSlice } from '@reduxjs/toolkit'

/** redux-toolkit 예시 */
// let user = createSlice({
//     name : 'cart',
//     initialState : 
//       {id : 0, name : 'White and Black', count : 2},
//     reducers : {
//       userCount(state, action){
              
//       }
//     }
//   }
// )
// export const {userJoin}  = user.actions /** setState를 export 해는 것 */

// generate, edit
const projectState = createSlice({

  // 슬라이스의 이름 정의
  name : 'cur_project',

  // 초기 상태
  initialState : {
    title: '제목없음',
    imgNums: 0,
  },

  // 액션 처리
  reducers : {
    setCurrentTitle : (state,action) => {
      state.title = action.payload;
    },
    setCurrentImgNum : (state,action) => {
      state.imgNums = action.payload;
    }
  }
}
)
export const { setCurrentTitle,setCurrentImgNum } = projectState.actions;

export default projectState.reducer;

// export default configureStore({
//   reducer: {
//     user: user.reducer
//   }

// })



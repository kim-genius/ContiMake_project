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
    title: '',
  },

  // 액션 처리
  reducers : {
    setCurrentTitle : (state,action) => {
      state.title = action.payload;
    }
  }
}
)

// session관리

const sessionState = createSlice({
    name:'session',
    initialState:{
      email:'',
      nickName:''
    },
    reducers :{
      setSession:(state,action) =>{
        state.email = action.payload.email;
        state.nickName = action.payload.nickName;
      }
    }
})



export const { setCurrentTitle } = projectState.actions;

export default projectState.reducer;

// export default configureStore({
//   reducer: {
//     user: user.reducer
//   }

// })



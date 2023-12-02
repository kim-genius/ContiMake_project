import { createSlice } from '@reduxjs/toolkit'


// session관리

const sessionState = createSlice({
  name: 'session',
  initialState: {
    email: '',
    nickName: ''
  },
  reducers: {
    setSession: (state, action) => {
      state.email = action.payload.email;
      state.nickName = action.payload.nickname;
    }
  }
})



export const { setSession } = sessionState.actions;

export default sessionState.reducer;

// export default configureStore({
//   reducer: {
//     user: user.reducer
//   }

// })




import { configureStore, createSlice } from '@reduxjs/toolkit'

/** redux-toolkit 예시 */
let user = createSlice({
    name : 'user',
    initialState : 
      {id : 0, email : '', password : '',nickName:''},
    reducers : {
      userJoin(state, action){
        state.email = action.payload.email
        state.password = action.payload.password
        state.nickName = action.payload.nickName
              
      }
    }
  })

export let {userJoin}  = user.actions /** setState를 export 해는 것 */

export default configureStore({
  reducer: {
    user : user.reducer
  }
})
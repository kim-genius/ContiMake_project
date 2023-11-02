import { configureStore, createSlice } from '@reduxjs/toolkit'

/** redux-toolkit 예시 */
let user = createSlice({
    name : 'cart',
    initialState : 
      {id : 0, name : 'White and Black', count : 2},
    reducers : {
      userCount(state, action){
              
      }
    }
  }
})

export let {userJoin}  = user.actions /** setState를 export 해는 것 */

export default configureStore({
  reducer: {
    user: user.reducer
  }

})
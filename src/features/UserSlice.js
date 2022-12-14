import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        SET_USER: (state, action)=> {   //action.type = SET_USER AND action.payload = {name: "javascript"}
           state.user = action.payload  //dispatch(SET_USER({name: "javascript"}))
        }
    }
})



export const { SET_USER } = userSlice.actions;

export const selectUser =  (state)=> state.user.user;

export default userSlice.reducer;
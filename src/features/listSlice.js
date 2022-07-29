import { createSlice } from "@reduxjs/toolkit";


export const listSlice = createSlice({

    name: "list",
    initialState:{
        list: null
    },
    reducers:{
        SET_LIST: (state, action)=>{
            state.list = action.payload
        }
    }

})


export const { SET_LIST } = listSlice.actions;

export  const selectList = (state) => state.list.list;

export default listSlice.reducer;
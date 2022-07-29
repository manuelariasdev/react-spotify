import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/UserSlice';
import tokenReducer from '../features/TokenSlice';
import listReducer from '../features/listSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        list: listReducer
    }
})
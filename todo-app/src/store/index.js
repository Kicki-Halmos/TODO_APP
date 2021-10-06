import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todo-slice';
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;
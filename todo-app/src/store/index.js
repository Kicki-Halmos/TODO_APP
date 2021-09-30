import { configureStore } from "@reduxjs/toolkit";
import apiSlice from './api-slice';

const store = configureStore({
    reducer: {
        api: apiSlice.reducer
    }
})

export default store;
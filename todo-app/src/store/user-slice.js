import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        errorMessage: ""
    }, 
    reducers: {
        signup(state, action){
            state.token = action.payload.token;
            state.errorMessage = "";
        },
        login(state, action) {
            state.token = action.payload.token;
            state.errorMessage="";
        },
        logout(state, action){
            state.token = null;
            state.errorMessage = "";
        },
        addErrorMessage(state, action){
            state.errorMessage = action.payload.errorMessage;
        },
        clearErrorMessage(state, action){
            state.errorMessage = "";
        }

    }
});

export const userActions = userSlice.actions;

export default userSlice;


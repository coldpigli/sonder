import {createSlice} from "@reduxjs/toolkit";
import { signupUser } from "services";

const initialState = {
    authToken: "" || JSON.parse(localStorage.getItem("authToken")),
    userData: null || JSON.parse(localStorage.getItem("userData")),
    authStatus: "idle",
    authError: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.authToken="";
            state.user=null;
            localStorage.removeItem("authToken");
            localStorage.removeItem("userToken");
        },   
    },
    extraReducers: {
        [signupUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [signupUser.fulfilled]: (state, action) => {
            state.userData = action.payload.createdUser;
            console.log(action.payload);
            state.authToken = action.payload.encodedToken;
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.createdUser));
        },
        [signupUser.rejected]: (state) => {
            state.authStatus = "failed";
        }
    }
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import { bookmarkHandler, loginUser, signupUser} from "services";
import { editUser } from "services/userServices";

const initialState = {
    authToken: "" || JSON.parse(localStorage.getItem("authToken")),
    userData: null || JSON.parse(localStorage.getItem("userData")),
    authStatus: "idle",
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
        updateUser: (state, action) => {
            console.log("updating user with",action.payload)
            state.userData = action.payload
        }
    },
    extraReducers: {
        [signupUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [signupUser.fulfilled]: (state, action) => {
            state.userData = action.payload.createdUser;
            state.authToken = action.payload.encodedToken;
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.createdUser));
        },
        [signupUser.rejected]: (state) => {
            state.authStatus = "failed";
        },
        [loginUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.userData = action.payload.foundUser;
            state.authToken = action.payload.encodedToken;
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.foundUser));
        },
        [loginUser.rejected]: (state) => {
            console.log("login me error hua")
            state.authStatus = 'failed'
        },
        [bookmarkHandler.pending]: (state) => {
            state.authStatus = "loading"
        },
        [bookmarkHandler.fulfilled]: (state, action) => {
            state.userData.bookmarks = action.payload.bookmarks
        },
        [bookmarkHandler.rejected]: (state) => {
            state.authStatus = "failed"
        },
        [editUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [editUser.fulfilled]: (state, action) => {
            console.log('askdnaskld', action);
            state.userData = action.payload.user;
            localStorage.setItem("userData", JSON.stringify(action.payload.user));
            state.authStatus = "success"
        },
        [editUser.rejected]: (state) => {
            state.authStatus = "failed"
        },
    }
})

export const {logout, updateUser} = authSlice.actions;
export const authReducer = authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "services";

const initialState = {
  userList: [],
  userStatus: "idle",
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers:{
        [getAllUsers.pending]: (state) => {
            state.userStatus = "pending";
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.userList = action.payload?.users;
            state.userStatus = "success"
        },
        [getAllUsers.rejected]: (state) => {
            state.userStatus = "failed"
        }
    }
})

export const userReducer = userSlice.reducer;
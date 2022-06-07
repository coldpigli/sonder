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
        updateUserList: (state, action) => {
            const {user, followUser} = action.payload;
            state.userList = state.userList.map((item)=>{
                return item.username===user.username?user:item
            })
            state.userList = state.userList.map((item)=>{
                return item.username===followUser.username?followUser:item
            })
        }
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

export const {updateUserList} = userSlice.actions;
export const userReducer = userSlice.reducer;
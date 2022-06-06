import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateUser } from "redux/slices/authSlice";
import { updateUserList } from "redux/slices/userSlice";

const editUser = createAsyncThunk("user/editUser",
async (userData, {getState,rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.post('/api/users/edit',{userData},{headers: {authorization: authToken}});
        return res.data;
    }catch(err){
        console.log(err);
        rejectWithValue(err);
    }
});

const getAllUsers = createAsyncThunk("users/getAllUsers",
async ()=>{
    try{
        const res = await axios.get('api/users');
        return res.data;
    } catch(err){
        console.log(err);
    }
});

const getUser = async(userId) => {
    try {
        const res = await axios.get(`/api/users/${userId}`);
        return res.data
    } catch(err){
        console.log(err);
    }
}


const handleFollowUnfollow = async (userMetaData, authToken, dispatch)=>{
    try{
        const {type, followUserId} = userMetaData;
        console.log('type',type, followUserId);
        const res = await axios.post(`/api/users/${type}/${followUserId}`,{},{headers: {authorization: authToken}});
        const {user, followUser} = res.data;
        dispatch(updateUser(user));
        dispatch(updateUserList({user,followUser}));
    }catch(err){
        console.log(err);
    }
}


export {
    editUser,
    getAllUsers,
    getUser,
    handleFollowUnfollow
}
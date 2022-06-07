import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

const getAllUsers = createAsyncThunk("users/allUsers",
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

export {
    editUser,
    getAllUsers,
    getUser,
}
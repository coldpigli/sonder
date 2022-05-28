import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signupUser = createAsyncThunk("auth/signupUser", 
async (signupData, {rejectWithValue})=>{
    try{
        const res = await axios.post('/api/auth/signup', signupData);
        console.log("I was here")
        return res.data;
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

const loginUser = createAsyncThunk("auth/loginUser",
async (loginData, {rejectWithValue})=>{
    try{
        const res = await axios.post('/api/auth/login', loginData);
        console.log("Login was called", res)
        return res.data;
    }catch(err){
        console.log("Login me error hua", err)
        return rejectWithValue(err.response.data)
    }
})

export {
    signupUser,
    loginUser
}
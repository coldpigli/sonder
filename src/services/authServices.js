import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signupUser = createAsyncThunk("auth/signupUser", 
async (signupData, {rejectWithValue})=>{
    try{
        const res = await axios.post('/api/auth/signup', signupData);
        console.log(res.data);
        return res.data;
    }catch(err){
        console.log("catch blok chalal")
        return rejectWithValue(err.response.data)
    }
})

export {
    signupUser
}
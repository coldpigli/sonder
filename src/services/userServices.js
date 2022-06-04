import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUser = createAsyncThunk("user/editUser",
async (userData, {getState,rejectWithValue})=>{
    console.log("user data being sent", userData);
    try{
        const {authToken} = getState().auth;
        const res = await axios.post('/api/users/edit',{userData},{headers: {authorization: authToken}});
        console.log('res.data',res.data);
        return res.data;
    }catch(err){
        console.log(err);
        rejectWithValue(err);
    }
});

export {
    editUser
}
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = createAsyncThunk("posts/getAllPosts",
async ()=>{
    try{
        const res = await axios.get('/api/posts');
        return res.data;
    }catch(err){
        console.log(err);
    }
});

const addNewPost = createAsyncThunk("posts/addNewPost",
async(postData, {getState, rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        console.log("PostData", postData);
        const res = await axios.post('/api/posts',{postData},{headers: {authorization: authToken}});
        console.log("Returned data after adding your post",res.data)
        return res.data;
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

export {
    getAllPosts,
    addNewPost
}
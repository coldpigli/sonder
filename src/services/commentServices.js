import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getCommentsOfPost = createAsyncThunk('comment/getCommentOfPost',
async(postId, {rejectWithValue})=>{
    try{
        const res = await axios.get(`/api/comments/${postId}`);
        return res.data
    } catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

const addNewCommentToPost = createAsyncThunk("comment/addNewComment",
async(commentData, {getState, rejectWithValue})=>{
    try{
        const {postId, comment} = commentData;
        console.log(commentData);
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/comments/add/${postId}`, {commentData: comment}, {headers: {authorization: authToken}});
        console.log('comment array returned', res.data);
        return res.data
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

export{
    addNewCommentToPost,
    getCommentsOfPost
}
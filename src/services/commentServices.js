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
async(commentMetaData, {getState, rejectWithValue})=>{
    try{
        const {postId, comment} = commentMetaData;
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/comments/add/${postId}`, {commentData: comment}, {headers: {authorization: authToken}});
        return res.data
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

const deleteComment = createAsyncThunk('comment/deleteComment',
async(commentMetaData, {getState, rejectWithValue})=>{
    try{
        const {postId, commentId} = commentMetaData;
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/comments/delete/${postId}/${commentId}`, {}, {headers: {authorization: authToken}});
        return res.data
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})
 
export{
    addNewCommentToPost,
    getCommentsOfPost,
    deleteComment
}
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
        const res = await axios.post('/api/posts',{postData},{headers: {authorization: authToken}});
        return res.data;
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

const likeOrDislikePost = createAsyncThunk("posts/likeOrDislikePost",
async(postData, {getState, rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/posts/${postData.type}/${postData._id}`,{},{headers: {authorization: authToken}});
        return res.data;
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
});

const bookmarkHandler = createAsyncThunk("post/bookmarkHandler",
async(postData, {getState, rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/users/${postData.type}/${postData._id}`,{},{headers: {authorization: authToken}});
        return res.data;
    } catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
});

const deletePost = createAsyncThunk("post/deletePost",
async(postData, {getState, rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.delete(`/api/posts/${postData._id}`, {headers: {authorization: authToken}});
        return res.data;
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

export {
    getAllPosts,
    addNewPost,
    likeOrDislikePost,
    bookmarkHandler,
    deletePost  
}
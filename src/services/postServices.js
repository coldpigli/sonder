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

const getCurrentPost = createAsyncThunk('posts/getSinglePost',
async(postId, {rejectWithValue})=>{
    try{
        const res = await axios.get(`/api/posts/${postId}`);
        return res.data;
    }catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

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

const editPost = createAsyncThunk("post/editPost",
async(postData, {getState, rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.post(`/api/posts/edit/${postData._id}`, {postData}, {headers: {authorization: authToken}});
        return res.data;
    } catch(err){
        console.log(err);
        return rejectWithValue(err);
    }
})

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
    getCurrentPost,
    addNewPost,
    likeOrDislikePost,
    bookmarkHandler,
    deletePost,
    editPost,
}
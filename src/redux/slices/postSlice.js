import {createSlice} from "@reduxjs/toolkit"
import { addNewPost, getAllPosts } from "services"
import { likeOrDislikePost } from "services/postServices"


const initialState = {
    postList: [],
    postStatus: "idle"
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.postList = action.payload
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.postStatus = "loading"
        },
        [getAllPosts.fulfilled]: (state, action) => {
            const {posts} = action.payload
            state.postList = posts;
            state.postStatus = "success"
        },
        [getAllPosts.rejected]: (state) => {
            state.postStatus = "failed"
        },
        [addNewPost.pending]: (state) => {
            state.postStatus = "loading"
        },
        [addNewPost.fulfilled]: (state, action) => {
            const {posts} = action.payload;
            state.postList = posts;
            state.postStatus = "success"
        },
        [addNewPost.rejected]: (state) => {
            state.postStatus = "failed"
        },
        [likeOrDislikePost.pending]: (state) => {
            state.postStatus = "loading"
        },
        [likeOrDislikePost.fulfilled]: (state, action) => {
            const {posts} = action.payload;
            state.postList = posts;
            state.postStatus = "success"
        },
        [likeOrDislikePost.rejected]: (state) => {
            state.postStatus = "failed"
        },
    }
})

export const {addPosts} = postSlice.actions;
export const postReducer = postSlice.reducer;
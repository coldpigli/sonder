const { createSlice } = require("@reduxjs/toolkit")
const { getAllPosts } = require("services")

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
        [getAllPosts.rejected]: (state, action) => {
            state.postStatus = "failed"
        }
    }
})

export const {addPosts} = postSlice.actions;
export const postReducer = postSlice.reducer;
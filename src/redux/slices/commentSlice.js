
import { createSlice } from "@reduxjs/toolkit";
import { addNewCommentToPost, deleteComment, getCommentsOfPost } from "services";

const initialState = {
  comments: [],
  authStatus: "idle",
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [getCommentsOfPost.pending]: (state) => {
      state.postStatus = "loading";
    },

    [getCommentsOfPost.fulfilled]: (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
      state.postStatus = "success";
    },

    [getCommentsOfPost.rejected]: (state) => {
      state.postStatus = "failed";
    },

    [addNewCommentToPost.pending]: (state) => {
      state.postStatus = "loading";
    },

    [addNewCommentToPost.fulfilled]: (state, action) => {
      const { comments } = action.payload;
      console.log("comments reeived", comments);
      state.comments = comments;
      state.postStatus = "success";
    },

    [addNewCommentToPost.rejected]: (state) => {
      state.postStatus = "failed";
    },

    [deleteComment.pending]: (state) => {
        state.postStatus = "loading";
    },

    [deleteComment.fulfilled]: (state, action) => {
        const { comments } = action.payload;
        state.comments = comments;
        state.postStatus = "success";
    },

    [deleteComment.rejected]: (state) => {
        state.postStatus = "failed";
      },

  },
});

export const commentReducer = commentSlice.reducer;

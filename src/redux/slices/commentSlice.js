
import { createSlice } from "@reduxjs/toolkit";
import { addNewCommentToPost, deleteComment, getCommentsOfPost } from "services";

const initialState = {
  comments: [],
  commentStatus: "idle",
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [getCommentsOfPost.pending]: (state) => {
      state.commentStatus = "loading";
    },

    [getCommentsOfPost.fulfilled]: (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
      state.commentStatus = "success";
    },

    [getCommentsOfPost.rejected]: (state) => {
      state.commentStatus = "failed";
    },

    [addNewCommentToPost.pending]: (state) => {
      state.commentStatus = "loading";
    },

    [addNewCommentToPost.fulfilled]: (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
      state.commentStatus = "success";
    },

    [addNewCommentToPost.rejected]: (state) => {
      state.commentStatus = "failed";
    },

    [deleteComment.pending]: (state) => {
        state.commentStatus = "loading";
    },

    [deleteComment.fulfilled]: (state, action) => {
        const { comments } = action.payload;
        state.comments = comments;
        state.commentStatus = "success";
    },

    [deleteComment.rejected]: (state) => {
        state.commentStatus = "failed";
      },

  },
});

export const commentReducer = commentSlice.reducer;

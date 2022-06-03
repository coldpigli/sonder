import { signupUser } from "./authServices";
import { loginUser } from "./authServices";
import {
  getAllPosts,
  getCurrentPost,
  addNewPost,
  likeOrDislikePost,
  bookmarkHandler,
  deletePost,
  editPost,
} from "./postServices";
import { addNewCommentToPost, getCommentsOfPost, deleteComment } from "./commentServices";

export {
  signupUser,
  loginUser,
  getAllPosts,
  addNewPost,
  likeOrDislikePost,
  bookmarkHandler,
  deletePost,
  editPost,
  getCurrentPost,
  addNewCommentToPost,
  getCommentsOfPost,
  deleteComment
};

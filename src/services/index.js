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
import { getAllUsers, getUser, handleFollowUnfollow } from "./userServices";

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
  deleteComment,
  getAllUsers,
  getUser,
  handleFollowUnfollow
};

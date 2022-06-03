import { signupUser } from "./authServices";
import { loginUser } from "./authServices";
import {
  getAllPosts,
  getSinglePost,
  addNewPost,
  likeOrDislikePost,
  bookmarkHandler,
  deletePost,
  editPost,
} from "./postServices";
import { addNewCommentToPost, getCommentsOfPost } from "./commentServices";

export {
  signupUser,
  loginUser,
  getAllPosts,
  addNewPost,
  likeOrDislikePost,
  bookmarkHandler,
  deletePost,
  editPost,
  getSinglePost,
  addNewCommentToPost,
  getCommentsOfPost
};

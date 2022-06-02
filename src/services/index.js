import { signupUser } from "./authServices";
import { loginUser } from "./authServices";
import { getAllPosts, addNewPost, likeOrDislikePost, bookmarkHandler } from "./postServices";

export{
    signupUser,
    loginUser,
    getAllPosts,
    addNewPost,
    likeOrDislikePost,
    bookmarkHandler
}
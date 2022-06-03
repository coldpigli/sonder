import { signupUser } from "./authServices";
import { loginUser } from "./authServices";
import { getAllPosts, addNewPost, likeOrDislikePost, bookmarkHandler, deletePost } from "./postServices";

export{
    signupUser,
    loginUser,
    getAllPosts,
    addNewPost,
    likeOrDislikePost,
    bookmarkHandler,
    deletePost
}
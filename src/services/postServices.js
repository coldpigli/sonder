import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = createAsyncThunk("posts/getAllPosts",
async ()=>{
    try{
        const res = await axios.get('/api/posts');
        console.log("I was here for posts")
        return res.data;
    }catch(err){
        console.log(err);
    }
})

export {
    getAllPosts
}
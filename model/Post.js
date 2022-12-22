import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
   username : String , 
   img : String , 
   text : String , 
})

const Post = mongoose.model("Post" , PostSchema);
export default Post;

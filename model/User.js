import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : String , 
    posts : Number,
    followers : Number ,
    following : Number,
    age : Number,
    image : String ,
})

const User = mongoose.model("User" , UserSchema)
export default User;
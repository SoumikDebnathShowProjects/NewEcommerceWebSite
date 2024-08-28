import mongoose, { mongo } from "mongoose";

//how user will give input inside the input fields and their validations
const userSchema =new mongoose.Schema({
    name:String,
    email:{
        type: String,
        unique:true,
        required:true
    },
    password:String,
    profilePic:String
},{
    timestamps:true
})


const userModel= mongoose.model("user",userSchema)
export default userModel;
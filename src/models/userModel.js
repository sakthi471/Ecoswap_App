import { Schema, model, models } from "mongoose";


const userSchema=new Schema({
     username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
     },
    email:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
     },
     password:{
        type:String,
        min:6,
        
     },
     img:{
        type:String,
     },
     isAdmin:{
        type:Boolean,
        default:false,
     },
     contacts:{
      type:[String],
      default:undefined,
     },

    
},{timestamps:true})


const User=models?.user|| model("user", userSchema)
export default User;

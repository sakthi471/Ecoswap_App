import { Schema, model, models } from "mongoose";


const  postItemSchema=new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    promised:{
        type:Boolean,
        default:false,
        
    }

},{timestamps:true})

const postItem=models.postItem|| model("postItem", postItemSchema)

export default postItem
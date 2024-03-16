import { Schema, model, models } from "mongoose";


const messageScheme=new Schema({
    message:{
       type:String,
       required:true,
    },
   senderID:{
       type:String,
       required:true,
    },
    reciverID:{
        type:String,
        required:true,
     },
   itemID:{
      type:String,
      
   }

},{timestamps:true})




const messageModel=models.message|| model("message", messageScheme)
export default messageModel;

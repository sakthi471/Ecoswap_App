import messageModel from "@/models/messageModel"
import User from "@/models/userModel"
import connectDB from "@/utils/datababseConnection"


export const POST=async(req)=>{
       try {
        const{message,senderID,reciverID,itemID}=await req.json()
        await connectDB()
        console.log(itemID);
        const newMessage={
            message,
            senderID,
            reciverID,
            itemID
        } 
        await messageModel.create(newMessage)
         await User.updateOne({_id:senderID},{ $addToSet: { contacts:reciverID } })
         await User.updateOne({_id:reciverID},{ $addToSet: { contacts: senderID} })


        return Response.json({message:'success'},{status:201})
       } catch (error) {
          return Response.json({msg:error.message})
       }
}
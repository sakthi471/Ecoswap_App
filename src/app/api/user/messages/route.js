import messageModel from "@/models/messageModel";
import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";


export const GET = async (req) => {
    try {
        const userId = await req.nextUrl.searchParams.get('userid');  
        const reciverId = await req.nextUrl.searchParams.get('reciverid');
        console.log(userId,reciverId);  

        await connectDB()
        const message= await messageModel.find({
            $and:[
                { $or: [{senderID:userId}, { senderID:reciverId }] },
                { $or: [{reciverID:userId}, { reciverID:reciverId }] },

            ]
        }).sort( { 'createdAt': 1} )

        return Response.json(message, { status: 200 })
    } catch (error) {
        console.log(error.message);
    }
}


export const POST = async (req) => {
    try {
        const {senderID,reciverID,message}= await req.json()
 
        console.log(senderID,reciverID,message);  
        
        await connectDB()

        const newMessage={
            message,
            senderID,
            reciverID,
        }
        const res=  await messageModel.create(newMessage)  
        return Response.json(res, { status: 200 })
    } catch (error) {
        console.log(error.message);
    }
}





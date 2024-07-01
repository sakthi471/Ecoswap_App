import messageModel from "@/models/messageModel";
import postItem from "@/models/newPostModel";
import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";

// all user list

export const GET = async () => {

    try {
        await connectDB()
        const user = await User.find({})
        return Response.json(user)
    } catch (error) {
        console.log(error.message);
        return Response.json({ error: error.message })
    }
}


export const DELETE = async (req) => {

    try {
        const id = await req.nextUrl.searchParams.get('id');
        await connectDB()
        await User.deleteOne({ _id: id })
        await postItem.deleteMany({userId:id})
        await messageModel.deleteMany({senderID:id})
        return Response.json({success:true});
    } catch (error) {
        console.log(error);
        return Response.json({success:false})
    }
}


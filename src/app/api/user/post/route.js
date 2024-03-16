import postItem from "@/models/newPostModel";
import connectDB from "@/utils/datababseConnection";

// user post api 
export const GET = async (req) => {

    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDB()
        const userPost = await postItem.find({ userId: id })
        return Response.json(userPost)
    } catch (error) {
        return Response.json({ error: error.message })
    }
}

//user post delete

export const DELETE = async (req) => {

    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDB()
        await postItem.deleteOne({_id:id})
        return Response.json({messgae:'Post SuccessFully deleted'})
    } catch (error) {
        return Response.json({ error: error.message })
    }
}



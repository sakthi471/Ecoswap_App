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



// user post promised updaate

export const PATCH = async (req) => {
    try {
        const _id = req.nextUrl.searchParams.get('postId');
        await connectDB()
        const {promised}= await postItem.findOne({_id}).select('promised')
        const res = await postItem.updateOne({ _id }, { $set: { promised: !promised } })
        return Response.json({msg:'success'},{status:201})
        

    } catch (error) {
        console.log(error);
    }
}

//user post delete



export const DELETE = async (req) => {

    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDB()
        await postItem.deleteOne({ _id: id })
        return Response.json({ messgae: 'Post SuccessFully deleted' })
    } catch (error) {
        return Response.json({ error: error.message })
    }
}




import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";

// user deeatails api
export const GET = async (req) => {
    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDB()
        const userPost = await User.findOne({ _id:id })
        console.log(userPost);
        return Response.json(userPost)
    } catch (error) {
        return Response.json({ error: error.message })
    }
}



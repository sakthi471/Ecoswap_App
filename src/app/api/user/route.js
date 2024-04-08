import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";
import { unstable_noStore as noStore } from 'next/cache';


// user deeatails api
export const GET = async (req) => {
    noStore();
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



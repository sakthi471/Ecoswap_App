import { auth } from "@/lib/auth"
import postItem from "@/models/newPostModel"
import connectDB from "@/utils/datababseConnection"


export const POST=async(req)=>{
    try {
        const {title,description,img,location}= await req.json()
        const {user}=await auth()
        await connectDB()
        const newPost={
            title,
            description,
            img,
            location,
            userId:user?.id
        }
        await postItem.create(newPost)
        return Response.json({msg:'success'})
    } catch (error) {
        return Response.json({msg:error.message})
    }
}
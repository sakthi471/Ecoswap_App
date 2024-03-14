import postItem from "@/models/newPostModel"
import connectDB from "@/utils/datababseConnection"


export const GET=async(req,{params})=>{
       try {
        await connectDB()
        const data= await postItem.findOne({_id:params.id})
        return Response.json(data)
       } catch (error) {
          return Response.json({msg:error.message})
       }
}
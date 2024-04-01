import postItem from "@/models/newPostModel"
import connectDB from "@/utils/datababseConnection"


export const GET=async()=>{
       try {
        await connectDB()
        const data= await postItem.find({})
      //   console.log(data[4].timeAgo);
        return Response.json(data)
       } catch (error) {
          return Response.json({msg:error.message})
       }
}
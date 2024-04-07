'use server'
import postItem from "@/models/newPostModel";
import connectDB from "@/utils/datababseConnection";
import { unstable_noStore as noStore } from 'next/cache';


export const GET = async (req, res) => {
  noStore();
  try {
    await connectDB()
    const query = await req.nextUrl.searchParams.get('query') || '';
    const page = parseInt(await req.nextUrl.searchParams.get('page')) || 1;
    const pageSize = parseInt(await req.nextUrl.searchParams.get('pageSize')) || 10;

    const skips = pageSize * (page - 1);
    const filter = query ? {
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } }
      ]
    } : {};

    let searchResult = []
    const totalPosts = await postItem.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / pageSize);
    searchResult = await postItem.find(filter).skip(skips).limit(pageSize).exec()

    // Return the response
    return Response.json({
      posts: searchResult,
      totalPages: totalPages
    })

  } catch (error) {
    console.log(error);
    return Response.json({
      error: 'An error occurred'
    })
  }
}
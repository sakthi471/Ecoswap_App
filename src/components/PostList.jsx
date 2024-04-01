
'use client'

import React from 'react'
import Post from './Post'
import useSWR from 'swr'
import {useSession} from 'next-auth/react'
import { fetcher } from '@/utils/fetcher'


const PostList = () => {
     const session=useSession()
     const userId=session?.data?.user.id
     const { data, error, mutate, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URI}/user/post?id=${userId}`, fetcher)
            
    return (
        <div className='flex w-[40%] flex-col gap-5 '>
          <p className=' font-bold text-text  text-2xl py-1'>Your post</p>
           {isLoading && <p> Loading... </p> }
           {error && <p> failed to fetch the data</p> }
           {
            data?.map( (post)=>( <  Post key={post._id} post={post} mutate={mutate} />))
           }
          
        </div>  
    )
}

export default PostList
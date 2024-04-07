
'use client'

import React from 'react'
import Post from './Post'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { fetcher } from '@/utils/fetcher'
import DataNotFound from './DataNotFound'
import Loader from './Loader'


const PostList = () => {
    const session = useSession()
    const userId = session?.data?.user.id
    const { data, error, mutate, isLoading } = useSWR(`/api/user/post?id=${userId}`, fetcher)

    return (
        <div className='flex w-[40%] flex-col gap-5  pr-5 overflow-auto h-[500px] '>
            <p className=' font-bold text-text  text-2xl py-1'>Your post</p>
            {isLoading ? (<Loader />) : (
                data?.length == 0 ? (<DataNotFound message='No Post Available' />) : (
                    data?.map(post => (
                        <Post key={post.id} post={post} mutate={mutate} />
                    ))
                )
            )




            }
        </div>
    )
}

export default PostList
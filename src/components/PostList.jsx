
'use client'

import React from 'react'
import Post from './Post'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { fetcher } from '@/utils/fetcher'
import DataNotFound from './DataNotFound'
import Loader from './Loader'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PostLoader = () => {
    return (
        <div className='w-full flex items-start  h-[100px] bg-white hover:shadow-md   duration-300 cursor-pointer '>
            <div className='w-[200px] relative h-[100px]'>
                <Skeleton width={100} height={90} />
            </div>
            <div className='w-full p-2 '>
                <p className=' w-full font-semibold  text-sm '> <Skeleton /> </p>
                <p className=' w-[80%]' ><Skeleton /></p>
                <p className=' w-[50%]' > <Skeleton /> </p>
            </div>

        </div>
    )
}

const PostList = () => {
    const session = useSession()
    const userId = session?.data?.user.id
    const { data, error, mutate, isLoading } = useSWR(`/api/user/post?id=${userId}`, fetcher)

    return (
        <div className='flex w-[50%] flex-col gap-5  pr-5 overflow-auto h-[500px] '>
            <p className=' font-bold text-text  text-2xl py-1'>Your post</p>
            {isLoading ? (
                Array(3).fill().map((_, i) => <PostLoader key={i} />)
            ) :
                (
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
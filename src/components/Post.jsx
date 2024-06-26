'use client'
import AlertConfirm from '@/utils/confirm';
import Image from 'next/image'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";


const Post = ({ post, mutate }) => {
    const [promised, setPromised] = useState(post?.promised)
    const handleDeletePost = async(postId) => {
        const confirmValue = await AlertConfirm("Are you sure want to delete this post")
        if (confirmValue) {

          await  fetch(`/api/user/post?id=${postId}`, {
                method: 'DELETE',
            })
            mutate()
        }
    }

    const handlePromised = async (id) => {
        try {
            const res = await fetch(`/api/user/post?postId=${id}`, {
                method: 'PATCH',
            })

            const data = await res.json();
            
            data && setPromised(!promised)

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='w-full flex items-start border-l-[4px] border-accent    min-h-[100px]  bg-secondary-light hover:shadow-md   duration-300 cursor-pointer '>
            <div className='w-[200px] relative  h-[100px]'>
                <Image src={post.img} fill alt='test' className=' object-contain ' />

            </div>
            <div className='w-[60%] p-2 '>
                <p className='font-semibold text-sm '> {post.title} </p>
                <small>{post.timeAgo}</small>
            </div>
            <div className=' px-2 flex flex-col py-1 justify-around h-full '>

                <div onClick={() => handleDeletePost(post._id)} className=' p-3'>
                    <MdDelete size={19} className=' text-red-500' />
                </div>
                <button className={`${promised ? " bg-red-400" : " bg-green-400"} text-white rounded-sm bg-green-500 p-1 w-[100px] text-xs capitalize `} onClick={() => handlePromised(post._id)} > {promised ? "promised" : "not promised"} </button>
            </div>
        </div>
    )
}

export default Post
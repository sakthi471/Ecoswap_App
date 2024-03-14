import Image from 'next/image'
import React from 'react'
import { MdDelete } from "react-icons/md";


const Post = ({ post, mutate }) => {
    const handleDeletePost = (postId) => {
        const confirmValue = confirm("Are you sure want to delete this post")
        if (confirmValue) {

            fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/post?id=${postId}`, {
                method: 'DELETE',
            })
            mutate()
        }

    }
    return (
        <div className='w-full flex items-start border-l-[4px] border-accent    h-[100px]  bg-secondary-light shadow-lg  hover:scale-105 duration-300 cursor-pointer '>
            <div className='w-[200px] relative  h-[100px]'>
                <Image src={post.img} fill alt='test' className=' object-contain ' />

            </div>
            <div className='w-[80%] p-2 '>
                <p className='font-semibold'> {post.title} </p>
                <p>{post.description}</p>
                <small>Just Now</small>
            </div>
            <div onClick={() => handleDeletePost(post._id)} className=' p-3'>
                <MdDelete size={19} className=' text-red-500' />
            </div>
        </div>
    )
}

export default Post
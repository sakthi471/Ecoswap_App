import NewPost from '@/components/NewPost'
import React from 'react'
export const metadata = {
    title: 'Give',
    description: 'Ecoswap Give page',
  }
  

const Give = () => {
    return (
         <div className='flex w-[50%] justify-center flex-col items-center'>
            <h1 className=' font-bold text-2xl py-2'>New Post </h1>
           <NewPost/>
        </div>
    )
}

export default Give
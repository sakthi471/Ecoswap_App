import NewPost from '@/components/NewPost'
import React from 'react'

const Give = () => {
    return (
         <div className='flex w-[50%] justify-center flex-col items-center'>
            <h1 className=' font-bold text-2xl py-2'>New Post </h1>
           <NewPost/>
        </div>
    )
}

export default Give
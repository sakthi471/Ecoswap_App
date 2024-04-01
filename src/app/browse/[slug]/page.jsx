import Replay from '@/components/Replay'
import { auth } from '@/lib/auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const getItemDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/browse/${id}`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const getUserDetails = async (userId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user?id=${userId}`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BrowseDetails = async ({ params }) => {
  const { title, img, description, userId ,timeAgo} = await getItemDetails(params.slug)
  const userDetails = await getUserDetails(userId)
  const session= await auth()
   

  return (
    <div className=' w-full flex items-center flex-col pt-3 '>
      <div className='w-[400px] h-[250px] relative'>
        <Image src={img} fill className=' object-contain ' alt='test ' />
      </div>
      <div className='w-full flex '>
        <div className='w-[50%] flex flex-col  p-10'>
          <p className=' font-bold text-lg text-text'>{title}</p>
          <div className='w-full min-h-[50px] p-2 bg-blue-100  border-l-4 border-accent'>
            <p>From     <span className=' font-bold capitalize'>{userDetails?.username}</span>
            </p>
            <small>{timeAgo}</small>
          </div>
          <p className=' mt-5  text-gray-500'> {description}</p>
        </div>
        <Replay userDetails={userDetails} session={session} itemID={params.slug} />
      </div>
    </div>
  )
}

export default BrowseDetails
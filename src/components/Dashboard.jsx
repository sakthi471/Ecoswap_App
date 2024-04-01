'use client'
import Loading from '@/app/loading';
import ContactList from '@/components/ContactList';
import MessageSection from '@/components/MessageSection';
import Profile from '@/components/Profile'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { FaRegMessage } from "react-icons/fa6";
import PostList from './PostList';
import Loader from './Loader';

const DashBoard = () => {

  const { data: session, status } = useSession()
  const [contact, setContact] = useState(null)

  if (status == 'loading') {
    return <Loading />
  }
  return (
    <div className='w-full flex justify-between py-10  '>
    
      <PostList />
      <div className=' w-full flex min-h-[500px] justify-center' >
     
        <div className='w-[30%] bg-gray-100 '>
          <div className=' w-full bg-primary  font-semibold '>
            <p className=' text-2xl p-2  text-white'>Chats</p>
          </div>
          <ContactList session={session} setContact={setContact} />
        </div>
        <MessageSection session={session} contact={contact} />
      </div>
    </div>

  )
}

export default DashBoard

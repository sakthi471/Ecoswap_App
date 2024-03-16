'use client'
import Loading from '@/app/loading'
import ContactList from '@/components/ContactList'
import MessageSection from '@/components/MessageSection'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'



const Message = () => {
    const { data: session, status } = useSession()
    const [contact, setContact] = useState(null)

    if (status == 'loading') {
        return <Loading />
    }
    return (
        <div className=' w-full flex min-h-[500px] justify-center' >
            <div className='w-[30%] bg-gray-100 '>
                <div className=' w-full bg-primary  font-semibold '>
                <p className=' text-2xl p-2  text-white'>Chats</p>
                </div>
                <ContactList session={session} setContact={setContact} />
            </div>
            <MessageSection session={session} contact={contact} />
        </div>
    )
}

export default Message
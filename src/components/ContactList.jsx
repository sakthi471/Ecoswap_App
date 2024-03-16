'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const ContactList = ({setContact ,session}) => {
    const [contacts, setContacts] = useState([])
    
    useEffect(() => {
        const getContacts = async () => {
            try {
                const userId =session.user.id;
                console.log(userId);
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/contacts?userid=${userId}`)
                const data = await res.json()
                setContacts(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getContacts()
       
            getContacts()
            console.log(session.user.id);
        
    }, [])

    return (
        <>
            {
                contacts?.map((contact) => (
                    <div onClick={ (e)=> setContact(contact) } key={contact._id} className='flex hover:bg-white hover:shadow-lg  cursor-pointer  gap-2 items-center border-b-[1px] border-gray-400 '>
                        {/* <Image src={''} width={100} height={100}  /> */}
                        <div className=' mx-3  w-7 h-7 rounded-full bg-slate-900 text-white  flex justify-center items-center  ' >
                            SS
                        </div>
                        <p className=' p-2 capitalize ' >{contact.username}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ContactList
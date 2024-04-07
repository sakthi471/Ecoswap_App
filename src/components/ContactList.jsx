'use client'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { generateColor } from '@/utils/ColorGenerator'
import DataNotFound from './DataNotFound'

const ContactList = ({setContact ,session}) => {
    const [contacts, setContacts] = useState([])
    const [loading,setLoading]=useState(false)

    
    useEffect(() => {
        const getContacts = async () => {
            try {
                const userId =session.user.id;
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/contacts?userid=${userId}`,{cache:'no-store'})
                const data = await res.json()
                setLoading(false)
                setContacts(data)

            } catch (error) {
                console.log(error.message);
            }
        }
        getContacts()
       
            getContacts()
        
    }, [])
     
   
     

    return (
        <> 
            {   loading ?( <Loader /> ):(
                contacts.length==0 ?( <DataNotFound message='No Contacts Available' />):(
                    contacts?.map((contact) => (
                        <div  onClick={ (e)=> setContact(contact) } key={contact._id} className='flex w-full hover:bg-white hover:shadow-lg  cursor-pointer  gap-2 items-center border-b-[1px] px-4 border-gray-400 '>
                            
                            <div style={{ backgroundColor:generateColor(contact.username)}} className=' w-8 h-8 rounded-full  text-white  flex justify-center items-center  ' >
                                {contact.username.charAt(0)}
                            </div>
                            <p className=' p-3 capitalize ' >{contact.username}</p>
                        </div>
                    ))
                )
            )
               
            }
        </>
    )
}

export default ContactList
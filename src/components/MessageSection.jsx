
import React, { useEffect, useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";

import Loader from './Loader';
import { generateColor } from '@/utils/ColorGenerator';
import PostMsg from './PostMsg';



const initialState = []

const MessageSection = ({ contact, session }) => {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState(initialState)
    const [refreshKey, setRefreshKey] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(true)

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleMessageSend()
        }
    }
    const handleMessageSend = async (e) => {
        try {
            setBtnDisabled(false)
            const newMessage = {
                message: msg,
                senderID: session.user.id,
                reciverID: contact._id
            }
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/messages`, {
                method: 'POST',
                body: JSON.stringify(newMessage)
            })

            const data = await res.json()
            setMessages((prev) => [...prev, data])
            setRefreshKey(oldKey => oldKey + 1)
            setMsg('')
            setBtnDisabled(true)

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        const getMessages = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/messages?userid=${session.user.id}&reciverid=${contact?._id}`)
                const data = await res.json()
                setLoading(false)
                setMessages(data)
            } catch (error) {
                console.log(error);
            }
        }
        getMessages()
    }, [contact, refreshKey])

    return (

        <div className='w-[60%]  flex flex-col  bg-secondary-light  '>
            {
                contact ? (
                    <>
                        <div>
                            <div className='flex  shadow-2xl  cursor-pointer  gap-2 items-center border-b-[1px] border-gray-400 '>
                                {/* <Image src={''} width={100} height={100}  /> */}
                                <div style={{ backgroundColor: generateColor(contact.username) }} className=' mx-3  w-7 h-7 rounded-full  text-white  flex justify-center items-center  ' >
                                    {contact.username.charAt(0)}
                                </div>
                                <p className=' p-3 capitalize ' >{contact.username}</p>
                            </div>
                        </div>
                        <div className='h-[400px]  p-3 overflow-y-scroll' >
                            {
                                loading ? (<Loader message='Please wait' />) : (

                                    <>

                                        {
                                            messages?.map((msg) => (
                                                msg.reciverID == session.user.id ? (<div key={msg._id} className='  relative m-2  shadow-lg block text-sm float-left rounded-md bg-white  min-w-[250px] '>
                                                    {msg.itemID && <PostMsg itemID={msg.itemID} postColor={'bg-white'} />
                                                    }
                                                     <p className=' p-2' >{msg.message}</p>
                                                    <small className=' absolute bottom-1 right-2 ' >  </small>
                                                </div>) : (<div key={msg._id} className=' relative m-2 text-sm  text-white float-right rounded-md  bg-blue-500  min-w-[300px] '>
                                                    {msg.itemID && <PostMsg itemID={msg.itemID} postColor={'bg-blue-500'} />
                                                    }
                                                     <p className=' p-2' >{msg.message}</p>
                                                    <small className=' absolute bottom-1 right-2 ' >  </small>
                                                </div>)

                                            ))
                                        }
                                    </>
                                )
                            }


                        </div>
                        <div className='h-[9%] flex'>
                            <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={handleEnter} type="text" className=' focus:outline-accent border-[2px] w-[80%] px-3 py-1 ' placeholder='message something' />
                            <button onClick={handleMessageSend} disabled={btnDisabled} className=' bg-primary hover:bg-accent cursor-pointer  text-white flex justify-center items-center gap-2 p-2 rounded-r-md ' >Send <BsSendFill /> </button>
                        </div>
                    </>
                ) : (
                    <div className=' w-full flex flex-col gap-4 justify-center items-center h-full '>
                        <p className='  text-gray-400 font-bold text-xl'> Welcome to EcoSwap</p>
                        <p className=' text-gray-400  text-xl' > select contact and message</p>
                        <FaMessage className=' text-accent' size={40} />
                    </div>
                )
            }


        </div>


    )
}

export default MessageSection
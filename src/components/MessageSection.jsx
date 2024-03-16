import React, { useEffect, useState } from 'react'
import { FaMessage } from "react-icons/fa6";


const initialState = []


const MessageSection = ({ contact, session }) => {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState(initialState)
    const [refreshKey, setRefreshKey] = useState(0);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleMessageSend()
        }
    }
    const handleMessageSend = async (e) => {
        try {
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
            setMessages((prev) => [...prev,data])
            setRefreshKey(oldKey => oldKey +1)
            setMsg('')

        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user/messages?userid=${session.user.id}&reciverid=${contact?._id}`)
                const data = await res.json()
                setMessages(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getMessages()
    }, [contact,refreshKey])

    return (

        <div className='w-[60%]  flex flex-col  bg-secondary-light   '>
            {
                contact ? (
                    <>
                        <div>
                            <div className='flex  shadow-2xl  cursor-pointer  gap-2 items-center border-b-[1px] border-gray-400 '>
                                {/* <Image src={''} width={100} height={100}  /> */}
                                <div className=' mx-3  w-7 h-7 rounded-full bg-slate-900 text-white  flex justify-center items-center  ' >
                                    SS
                                </div>
                                <p className=' p-2 capitalize ' >{contact.username}</p>
                            </div>
                        </div>
                        <div className='h-[90%]  p-3' >
                            {
                                messages?.map((msg) => (
                                    msg.reciverID == session.user.id ? (<div key={msg._id} className='  relative m-2   text-sm float-left rounded-lg p-2 bg-white w-[80%]'>
                                        {msg.message}
                                        <small className=' absolute bottom-1 right-2 ' > {msg.time}</small>
                                    </div>) : (<div key={msg._id} className=' relative m-2 text-sm  text-white float-right rounded-lg p-2 bg-primary w-[80%]'>
                                        {msg.message}
                                        <small className=' absolute bottom-1 right-2 ' > 4:45 </small>
                                    </div>)

                                ))
                            }

                        </div>
                        <div className='h-[10%]'>
                            <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={handleEnter} type="text" className=' focus:outline-accent border-[2px] w-[80%] px-3 py-1 ' placeholder='message something' />
                            <button onClick={handleMessageSend} className=' bg-accent  rounded-md text-white px-2 w-20 py-1' >send</button>
                        </div>
                    </>
                ) : (
                    <div className=' w-full flex flex-col gap-4 justify-center items-center h-full '>
                        <p className=' text-slate-500 font-bold text-xl'> Welcome to EcoSwap</p>
                        <FaMessage size={40} />
                    </div>
                )
            }


        </div>


    )
}

export default MessageSection
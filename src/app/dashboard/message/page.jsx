'use client'
import ContactList from '@/components/ContactList'
import Image from 'next/image'
import React, { useState } from 'react'

const initialState = [
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa possimus min',
        time: '23:34'
    },
    {
        id: 2,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa possimus min',
        time: '9:56',

    },
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa possimus min',
        time: '1:33',
    }
]
const authid = '65ce49b1011a168db1464243'
const contactid = 1
const Message = () => {

    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState(initialState)
    const handleChangeMsg = (e) => {
        setMsg(e.target.value)

    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleMessageSend()
        }
    }
    const handleMessageSend = (e) => {
        console.log('cliekd');
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Note: January is 0
        var year = currentDate.getFullYear();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        const timeFormate = `${hours}:${minutes}`
        setMessages((prev) => [...prev, { id: authid, message: msg, time: timeFormate }])
        setMsg('')
        console.log(timeFormate);
    }


    return (
        <div className=' w-full flex min-h-[500px] justify-center' >
            <div className='w-[30%] bg-secondary '>
             <ContactList  />
            </div>
            <div className='w-[60%]  flex flex-col  bg-secondary-light   '>
                <div>
                    <div className='flex  shadow-2xl  cursor-pointer  gap-2 items-center border-b-[1px] border-gray-400 '>
                        {/* <Image src={''} width={100} height={100}  /> */}
                        <div className=' mx-3  w-7 h-7 rounded-full bg-slate-900 text-white  flex justify-center items-center  ' >
                            SS
                        </div>
                        <p className=' p-2 capitalize ' >sakthi</p>
                    </div>
                </div>
                <div className='h-[90%]  p-3' >
                    {
                        messages?.map((msg) => (
                            msg.id == contactid ? (<div key={msg.time} className='  relative m-2   text-sm float-left rounded-lg p-2 bg-white w-[80%]'>
                                {msg.message}
                                <small className=' absolute bottom-1 right-2 ' > {msg.time}</small>
                            </div>) : (<div key={msg.time} className=' relative m-2 text-sm  text-white float-right rounded-lg p-2 bg-primary w-[80%]'>
                                {msg.message}
                                <small className=' absolute bottom-1 right-2 ' > {msg.time}</small>
                            </div>)

                        ))
                    }



                </div>
                <div className='h-[10%]'>
                    <input value={msg} onChange={(e) => handleChangeMsg(e)} onKeyDown={handleEnter} type="text" className=' focus:outline-accent border-[2px] w-[80%] px-3 py-1 ' placeholder='message something' />
                    <button onClick={handleMessageSend} className=' bg-accent  rounded-md text-white px-2 w-20 py-1' >send</button>
                </div>
            </div>

        </div>
    )
}

export default Message
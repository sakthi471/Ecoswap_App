'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Replay = ({ userDetails, session, itemID }) => {

   const [replaySection, SetReplaySection] = useState(false)
   const router = useRouter()
   const [message, setMessage] = useState('')

   const messageSubmit = async () => {
      try {
         const confirmation = confirm("Are you sure want post this")
         console.log(confirmation);
       
         if (!confirmation) {
            return;
         }

         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/browse/message`, {
            method: 'POST',
            body: JSON.stringify({
               message,
               senderID: session?.user?.id,
               reciverID: userDetails?._id,
               itemID,
            })
         })
         router.push('/dashboard/message')
      } catch (error) {
         console.log(error);
      }

   }

   return (
      <div className='w-[50%] py-10'>
         {!replaySection && (
            <>
               <p className='font-bold text-green-500 py-1 '>Interested in this offer?</p>
               <button onClick={() => SetReplaySection(true)} className=' bg-green-500 py-1 px-8 text-white rounded-sm '>Replay</button>
            </>
         )}

         {replaySection && <div className=' w-full flex gap-4 flex-col '>
            <div >
               <p className='font-bold text-green-500 py-1 '>New Message</p>
               <p className=' text-gray-500'>To :<span className='px-1 text-text font-bold'> {userDetails?.username} </span></p>
            </div>
            <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Write your Message here' className=' border-2 focus:outline-accent
                 rounded-sm border-gray-500 p-2' rows={5} ></textarea>
            <button   onClick={() => messageSubmit()} className='  cursor-pointer bg-green-500 py-1 px-8 text-white rounded-sm '>Send Message</button>
         </div>}
      </div>
   )
}

export default Replay
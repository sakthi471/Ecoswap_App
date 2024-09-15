'use client'
import AlertConfirm from '@/utils/confirm'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Replay = ({ userDetails, session, itemID }) => {

   const [replaySection, SetReplaySection] = useState(false)
   const router = useRouter()
   const [message, setMessage] = useState('')
   console.log(userDetails);
   const messageSubmit = async () => {
      try {
         const confirmation = await AlertConfirm("Are you sure want post this")
         console.log(confirmation);
         if(confirmation){
            const messageBody={
               message,
               senderID: session?.user?.id,
               reciverID: userDetails?._id,
               itemID,
            }
            // console.log(messageBody);
            const res = await fetch(`/api/browse/message`, {
               method: 'POST',
               body: JSON.stringify(messageBody)
            })
            console.log(await res.json())

            router.push('/dashboard')
         }
      
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
            <textarea required={true} onChange={(e) => setMessage(e.target.value)} placeholder='Write your Message here' className=' border-2 focus:outline-accent
                 rounded-sm border-gray-500 p-2' rows={5} ></textarea>
            <button    onClick={() => messageSubmit()} className='  cursor-pointer bg-green-500 py-1 px-8 text-white rounded-sm '>Send Message</button>
         </div>}
      </div>
   )
}

export default Replay
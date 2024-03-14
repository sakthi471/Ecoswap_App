'use client'
import { handleGithubLogout } from '@/lib/action';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";



const Profile = () => {
  const session = useSession()
  const [toogleProfile, setToofleProfile] = useState(false)
  return (
    <div onClick={() => setToofleProfile(!toogleProfile)} className=' absolute  right-20  cursor-pointer '>
      <CgProfile className=' text-accent' size={25} />
      {
        toogleProfile && (
          <div className=' absolute shadow-xl left-3 bg-white  rounded-md '>
            <p onClick={() => setToofleProfile(!toogleProfile)} className=' px-2 py-1 text-sm    border-b-[1px] border-accent hover:bg-secondary-light capitalize '>{session?.data?.user.username}</p>

            <form action={handleGithubLogout}>
              <button type='submit' className=' text-sm hover:bg-secondary-light px-2 py-1 border-b-[1px] border-accent' >Logout</button>
            </form>
          </div>
        )
      }
    </div>

  )
}

export default Profile
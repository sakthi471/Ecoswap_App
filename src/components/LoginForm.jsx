"use client"
import { handleGithubLogin, handleLogin } from '@/lib/action'
import React from 'react'
import { useFormState } from "react-dom";


const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);

  return (

    <div className='w-[40%]  gap-3 flex flex-col items-center justify-center  shadow-2xl p-6'>
      <h1 className='font-bold text-2xl '>Login</h1>

      <form className=' w-[90%] flex flex-col gap-7' action={formAction}>
        <div className='flex flex-col'>
          <label htmlFor="username">User Name</label>
          <input required className=' border-gray-500 border-[1px] outline-primary rounded-md px-4 py-2' type="text" placeholder='Enter your username' name='username' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Passoword</label>
          <input required className=' border-gray-500 border-[1px] outline-primary rounded-md px-4 py-2' type="password" name='password' placeholder='Enter your password' />
        </div>
        <button className=' rounded-md  bg-primary hover:bg-accent p-2 text-white '>Login</button>
        {state?.error}
      </form>
      <span className=' text-slate-600' >or</span>
      <form className='w-[90%] flex-col items-center' action={handleGithubLogin}>
        <button className=' rounded-md bg-slate-800  hover:bg-slate-900 w-full p-2 text-white' >Login with Github</button>
      </form>
    </div>


  )
}

export default LoginForm
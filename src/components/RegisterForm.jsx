
"use client"
import { handleGithubLogin, handleRegsiter } from '@/lib/action';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from "react-dom";


const RegisterForm = () => {
    const [state, formAction] = useFormState(handleRegsiter, undefined);

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])
    

    return (
        <>
            <form className='w-[90%] flex flex-col gap-7 ' action={formAction}>
                <div className=' flex flex-col '>
                    <label htmlFor="username">Username</label>
                    <input required id='username' className=' border-gray-500 border-[1px] outline-primary rounded-sm px-4 py-2' type="text" placeholder='username' name='username' />
                </div>
                <div className=' flex flex-col '>
                    <label htmlFor="email">Email</label>
                    <input required id='email' className=' border-gray-500 border-[1px] outline-primary rounded-sm px-4 py-2' type="email" placeholder='email' name='email' />
                </div>
                <div className=' flex flex-col '>
                    <label htmlFor="password">Password</label>
                    <input required id='password' className=' border-gray-500 border-[1px] outline-primary rounded-sm px-4 py-2' type="password" placeholder='password' name='password' />
                </div>
                <div className=' flex flex-col '>
                    <label htmlFor="passwordReapt">Confirm the Password</label>
                    <input required id='passwordReapt' className=' border-gray-500 border-[1px] outline-primary rounded-sm px-4 py-2' type="password" placeholder='password again' name='passwordReapt' />
                </div>
                <button className=' rounded-sm  bg-primary hover:bg-accent p-2 text-white '>Register</button>
                <span className=' text-red-500'>{state?.error}</span>

            </form>
            <p className='  capitalize text-slate-500'>or</p>

            <form className='w-[90%] flex-col items-center' action={handleGithubLogin}>
                <button className=' rounded-sm bg-slate-800  hover:bg-slate-900 w-full p-2 text-white' >Login with github</button>
            </form>
        </>


    )
}

export default RegisterForm
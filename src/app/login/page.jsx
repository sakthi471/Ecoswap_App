import LoginForm from '@/components/LoginForm';
import React from 'react'

const Login = async() => {
  
  return (
    <div className='w-[40%] gap-3 flex flex-col items-center justify-center  shadow-2xl p-6' >
        <h1 className='font-bold text-2xl '>Login</h1>
       <LoginForm/>
    </div>
  )
}

export default Login
import LoginForm from '@/components/LoginForm';
import React from 'react'

export const metadata = {
  title: 'Login',
  description: 'Ecoswap login page',
}

const Login = async() => {
  
  return (
    <div className='w-full min-h-[500px] gap-3 flex  items-center justify-center' >
       <LoginForm/>
    </div>
  )
}

export default Login
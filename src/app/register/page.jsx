import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Register',
  description: 'Ecoswap register page',
}


const Register = () => {
  return (
    <div className='w-[40%] gap-3 flex flex-col items-center justify-center   shadow-2xl p-6'>
      <h1 className='font-bold text-2xl '>Register</h1>
     <RegisterForm/>
    </div>
  )
}

export default Register
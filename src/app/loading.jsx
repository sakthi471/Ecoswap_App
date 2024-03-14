import React from 'react'

const Loading = () => {
  return (
       <div className='w-full h-screen flex flex-col gap-7 justify-center items-center'>
           <div
    className="  h-[40px] w-[40px] animate-spin rounded-full text-accent border-[5px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
    <p className=' p-5 font-bold text-lg  '>Loading....</p>
       </div>
    )
}

export default Loading
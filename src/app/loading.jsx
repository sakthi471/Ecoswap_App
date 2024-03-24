'use client'
import React from 'react'

import {ThreeDots} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[500px] '>
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#145fc8"
        radius="12"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loading
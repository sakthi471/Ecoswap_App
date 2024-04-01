import React from 'react'
import { Oval } from 'react-loader-spinner'


const Loader = ({message='Loading...'}) => {
    return (
        <div className='flex justify-center items-center gap-2 p-2'>
            <Oval
                visible={true}
                height="30"
                width="30"
                color="#145fc8"
                radius={10}
                secondaryColor='#ffffff'
                ariaLabel="ovel-loading"
                wrapperStyle={{}}
                wrapperClass=" "
            />
            <p className=' text-sm'> { message}</p>
        </div>

    )
}

export default Loader
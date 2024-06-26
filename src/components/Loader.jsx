import React from 'react'
import { Oval } from 'react-loader-spinner'


const Loader = ({message='Loading...' ,size='30'}) => {
    return (
        <div className='flex justify-center items-center gap-4 p-2'>
            <Oval
                visible={true}
                height={size}
                width={size}
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
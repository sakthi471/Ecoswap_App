import { generateColor } from '@/utils/ColorGenerator'
import React from 'react'

const Avathar = ({ username }) => {
    return (
        <div style={{ backgroundColor:generateColor(username) }} className={` w-8 h-8 cursor-pointer  rounded-full  flex justify-center items-center `}>
            <p className=' text-white '> {username.split(" ").map(word => word[0]).join("").toUpperCase()} </p>

        </div>
    )
}

export default Avathar
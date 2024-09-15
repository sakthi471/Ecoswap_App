'use client'

import React from 'react'
import Lottie from "lottie-react";
import AnimationsData from "../lottie/data.json";



const Animation = () => {
    return (
        <div className=" w-[25%] ">
            <Lottie animationData={AnimationsData}  />
        </div>
    )
}

export default Animation
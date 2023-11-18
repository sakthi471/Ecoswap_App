import React from 'react'
import { FaRecycle } from "react-icons/fa";


const links=[
    {
        id:1,
        title:'home',

    },
    {
        id:2,
        title:'browse',

    },
    {
        id:3,
        title:'give',

    },
    {
        id:4,
        title:'login',

    },
]

const Nav = () => {
  return (
    <nav className='   w-full h-[50px] text-text flex justify-between px-10 items-center border-b-[1px]  '>
        <div className='flex items-center gap-3'>
            <FaRecycle size={25} className=' text-primary' />
            <h2  className='  text-xl font-bold'>Eco<span className=' text-green-500 '>Swap</span> </h2>
        </div>
         <div className=' flex items-center gap-5'>
            {
                links.map(({id,title})=> <li className=' list-none  capitalize  border-primary  px-2   text-sm hover:border-b-[2px]  ' key={id} >{title}</li> )
            }
         </div>      
    </nav>
    )
}

export default Nav

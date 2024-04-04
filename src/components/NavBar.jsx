
import Link from 'next/link';
import React from 'react'
import { FaRecycle } from "react-icons/fa";
import NavLinks from './NavLinks';
import { auth } from '@/lib/auth';
import { handleGithubLogout } from '@/lib/action';
import Profile from './Profile';



const links = [
    {

        title: 'home',
        url: '/'


    },
    {

        title: 'browse',
        url: '/browse'


    },
    {

        title: 'give',
        url: '/give'


    },


]

const NavBar = async () => {


    const session = await auth();
    console.log(session);

    return (
        <nav className=' z-10 bg-white fixed top-0 left-0   w-full h-[50px] text-text flex justify-between px-20 items-center border-b-[1px]  '>
            <div className='flex items-center gap-3'>
                <FaRecycle size={25} className=' text-primary' />
                <Link href={'/'}> <h2 className='  text-xl font-bold'>Eco<span className=' text-green-500 '>Swap</span> </h2>
                </Link>
            </div>
            <div className='  flex items-center gap-7'>
                {
                    links.map((item) => <NavLinks key={item.title} item={item} />)
                }

                {
                    session?.user ? (
                        <>
                            {
                                session.user?.isAdmin ? (

                                    <NavLinks item={{ title: 'admin', url: '/admin' }} />
                                ) : (
                                    <NavLinks item={{ title: 'dashboard', url: '/dashboard' }} />
                                )

                            }
                          <div className='group  w-full h-full'>
                          <div className=' relative w-8 h-8 cursor-pointer  rounded-full bg-gray-300 flex justify-center items-center '>
                                <p> { session.user.username.split(" ").map( word=> word[0]).join("").toUpperCase()} </p>
                                <form className=' absolute  hidden flex-col rounded-lg  justify-center top-7   bg-white shadow-lg -right-10  group-hover:flex' action={handleGithubLogout}>
                                    <p className='px-4 py-1 border-b-[1px] border-gray-300' >{session.user.username}</p>
                                    <hr className=' ' />
                                    <button className='  bg-primary px-4 py-1 border-b-[1px] border-gray-300 border-none  text-sm text-white hover:bg-accent'>Logout</button>
                                </form>
                            </div>
                          </div>
                    
                        </>
                    ) : (
                        <NavLinks item={{ title: 'login', url: '/login' }} />
                    )
                } {
                    !session?.user && <NavLinks item={{ title: 'register', url: '/register' }} />
                }
            </div>


        </nav>

    )
}


export default NavBar



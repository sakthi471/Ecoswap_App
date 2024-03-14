
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

    return (
        <nav className=' z-10 bg-white fixed top-0 left-0   w-full h-[50px] text-text flex justify-between px-10 items-center border-b-[1px]  '>
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
                                session.user?.isAdmin ?(

                                    <NavLinks item={{ title: 'admin', url: '/admin' }} />
                                ):(
                                    <NavLinks item={{title:'dashboard',url:'/dashboard'}} />
                                )

                            }
                            <form action={handleGithubLogout}>
                                <button className='bg-primary text-white border-none  text-sm  px-4 py-[3px] hover:bg-accent rounded-full'>Logout</button>
                            </form>
                            {/* <Profile/> */}
                        </>
                    ) : (
                        <NavLinks item={{ title: 'login', url: '/login' }} />
                    )
                } {
                     !session?.user  && <NavLinks item={{ title: 'register', url: '/register' }} />
                }
            </div>


        </nav>

    )
}


export default NavBar



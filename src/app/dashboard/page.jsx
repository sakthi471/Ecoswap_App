import PostList from '@/components/PostList'
import Profile from '@/components/Profile'
import Link from 'next/link';
import { FaRegMessage } from "react-icons/fa6";

export const metadata = {
  title: 'Dashboard',
  description: 'Ecoswap dashboard page',
}



const DashBoard = () => {

  return (
    <div className='w-full flex justify-between '>
      <PostList />
      <div className=''>
        <Link className=' flex items-center gap-3 text-gray-400 text-sm border-[1px] border-accent hover:bg-blue-500 hover:text-white  rounded-2xl px-2 py-1 hover:shadow-xl' href={'/dashboard/message'} >
          Message page <FaRegMessage />
        </Link>
      </div>
    </div>
  )
}

export default DashBoard

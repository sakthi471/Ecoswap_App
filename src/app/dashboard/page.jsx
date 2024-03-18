'use client'
import PostList from '@/components/PostList'
import Profile from '@/components/Profile'


const DashBoard = () => {
    
  return (
    <div className='w-full flex   min-h-screen '>
      <Profile />
      <PostList />
    </div>
  )
}

export default DashBoard

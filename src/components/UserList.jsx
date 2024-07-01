'use client'
import React, { useEffect, useState } from 'react'
import Avathar from './Avathar'
import { MdDelete } from 'react-icons/md'
import DataNotFound from './DataNotFound'
import Skeleton from 'react-loading-skeleton'
import AlertConfirm from '@/utils/confirm'



const User = ({ user, handleDeleteUser }) => {

    
     const dateOnly = user?.createdAt.slice(0, 10);



    const deleteUser = async (id) => {
        try {

            const isConfirmed = await AlertConfirm("this delete the all user releted contents like message post permenetly")

            if (isConfirmed) {

                const res = await fetch(`/api/admin/users?id=${id}`, {
                    method: 'DELETE'
                })
                const { success } = await res.json()
                if (success) {
                    handleDeleteUser(id)
                }
            }

        } catch (error) {

        }


    }
    return (
        <div className={`${user ? 'bg-secondary-light' : 'bg-white'} shadow-md flex p-2 gap-5 rounded-lg justify-around items-center `}>
            {user ? <Avathar username={user.username} /> : <Skeleton circle={true} height={40} width={40} />
            } <div className=' w-[70%]'>
                <p className=' text-sm font-bold ' >{user?.username || <Skeleton width={100} />}</p>
                <p className=' text-sm  ' >{user?.email || <Skeleton />}</p>
                <p className=' text-xs '>
                    { dateOnly ||
                        < Skeleton width={140} />}   </p>
            </div>
            {user ? <div onClick={() => deleteUser(user._id)} className=' cursor-pointer p-3'>
                <MdDelete size={19} className=' text-red-500' />
            </div> : <Skeleton height={20} width={20} />
            }
        </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            const res = await fetch('/api/admin/users')
            const data = await res.json()
            setUsers(data)
            setLoading(false)
        }
        fetchUsers()

    }, [])

    const handleUserDelete = (id) => {

        const updateUser = users.filter((user) => user._id != id)
        setUsers(updateUser);
    }
    return (
        <div className=' w-[30%] flex flex-col pt-5 gap-5 '>
            <p className='font-semibold text-lg '>Users</p>
            {
                loading ? (
                    Array(4).fill().map((_, i) => <User key={i} />)
                ) : (
                    users.length == 0 ? (
                        <DataNotFound message=' User Data Not Found ' />
                    ) : (
                        users.map(user => <User key={user._id} handleDeleteUser={handleUserDelete} user={user} />)
                    )
                )
            }
        </div>
    )
}

export default UserList
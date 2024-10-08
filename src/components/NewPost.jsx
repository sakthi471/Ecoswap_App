"use client"
import AlertConfirm from '@/utils/confirm'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const initialState = {
   title: '',
   description: '',
   location: '',
}

const NewPost = (e) => {

   const [img, setImg] = useState('')
   const [input, setInput] = useState(initialState)
   const [loader, setLoader] = useState(false)
   const [msg, setMsg] = useState(null)

   const router = useRouter()
   const handleImg = (e) => {
      try {
         var reader = new FileReader()
         reader.readAsDataURL(e.target.files[0]);
         reader.onload = () => {

            setImg(reader.result)
         }
         reader.onerror = error => {
            console.log('Error: ' + error);
         }
      } catch (error) {
         throw new Error(error.message)
      }
   }

   const handleInput = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value })
   }
   const handleSubmit = async (e) => {
      try {
         e.preventDefault()
         const confirmValue = await AlertConfirm("Are you sure want to post this ")
         console.log(confirmValue);

         if (confirmValue) {
            setLoader(true)

            const newPost = {
               img,
               ...input
            }
            const res = await fetch(`/api/new_post`, {
               method: 'POST',
               body: JSON.stringify(newPost)
            })
            setLoader(false)
            setMsg(await res.json())
            setInput(initialState)
            router.push('/dashboard')
         }

      } catch (error) {
         console.log(error);
      }

   }

   return (
      <form onSubmit={handleSubmit} className='flex shadow-2xl text-text w-full gap-5 flex-col py-8 px-12 rounded-md  items-center' >
         <h1 className=' font-bold text-xl py-2'>New Post </h1>


         <div className=' flex flex-col gap-1  w-full  ' >
            <label className=' text-sm font-semibold' htmlFor="postTitle">Post Tile</label>
            <input value={input.title} onChange={handleInput} required name='title' className=' py-2 px-4 rounded-md focus:outline-accent border-[1px] border-slate-500 ' id='postTitle' type="text" placeholder='Eg: Chess board' />
         </div>
         <div className=' flex flex-col gap-1  w-full  ' >
            <label className=' text-sm font-semibold' htmlFor="description">Description</label>
            <textarea value={input.description} onChange={handleInput} name='description' rows={4} className='  resize-none border-[1px] border-slate-500 py-2 px-4 rounded-md focus:outline-accent ' id='description' type="text" placeholder='Eg: size,color,condition,etc' ></textarea>

         </div>
         <div className=' flex flex-col gap-1  w-full  ' >
            <label className=' text-sm font-semibold' htmlFor="location">Year/Dept/Slot</label>
            <input value={input.location} onChange={handleInput} required name='location' className=' py-2 px-4 rounded-md focus:outline-accent border-[1px] border-slate-500 ' id='location' type="text" placeholder='Eg: III year-CSE-Slot-A' />
         </div>

         <div className=' flex flex-col gap-1  w-full  ' >
            <label className=' text-sm font-semibold' htmlFor="img">Image</label>
            <input required name='img' onChange={handleImg} className=' w-full bg-white   text-sm  border border-slate-500  rounded-md cursor-pointer file:bg-primary text-slate-400 file:p-2 file:border-none file:cur file:text-white  focus:outline-none ' id='img' type="file" accept='image/*' />
            {img == '' || img == null ? "" : <img width={250} className='p-3' src={img} />}
         </div>








         <button type='submit' className=' font-bold bg-primary w-full p-2 rounded-md  hover:bg-accent text-white '>Submit</button>
         {
            loader && <p>Loading....</p>

         }{
            msg && <span className=' text-green-500'>{msg.msg}</span>
         }
      </form>
   )
}

export default NewPost
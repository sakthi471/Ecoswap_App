import ItemCard from '@/components/ItemCard'
import React from 'react'

export const metadata = {
  title: 'Browse',
  description: 'Ecoswap browse page',
}


const getPostItem=async()=>{
      const res= await fetch(`${process.env.NEXT_PUBLIC_API_URI}/browse`,{cache:'no-store'  })
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
}

const Browse = async() => {
    const postItem= await getPostItem()
    console.log(postItem);
    
  return (
    <div className=' flex flex-wrap justify-center gap-14 py-8 items-center'>
         {
            postItem?.map( (item)=>(
                <ItemCard key={item._id} item={item} />
            ))
         }        
    </div>
  )
}

export default Browse

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ItemCard = ({ item }) => {
  return (
    <Link href={`/browse/${item._id}`}>

      <div className=' hover:scale-105 duration-300 cursor-pointer w-[250px] rounded-md   min-h-[250px] bg-blue-100 text-text shadow-xl'>
        <div className='w-full  h-[200px] relative '>

          <Image src={item.img} loading='lazy'  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw" alt='img' fill className=' rounded-t-md object-contain' />
        </div>
        <div className=' min-h-[50px] border-l-[4px] border-primary px-4  py-2'>
          <p className=' font-bold '>{item.title}</p>
          <p className=' text-sm'>3 days ago</p>
        </div>
      </div>
    </Link>

  )

}

export default ItemCard
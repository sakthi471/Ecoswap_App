import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'


const ItemCard = ({ item }) => {
  return (
    <Link href={`/browse/${item?._id}`}>

      <div className={`hover:scale-105 duration-300 cursor-pointer w-[200px] rounded-md   min-h-[250px]  text-text shadow-xl ${item ? 'bg-secondary-light':'bg-white' } ` }>
        <div className='w-full  h-[200px] relative flex justify-center '>

         {
            item ?   <Image src={item.img} loading='lazy' sizes="(min-width: 60em) 24vw,
            (min-width: 28em) 45vw,
            100vw" alt='img' fill className=' rounded-t-md object-contain' />: <Skeleton  width={160} height={200} />
         }

            
        </div>
        <div className=' min-h-[50px] flex justify-between  px-4  py-2'>
          <div className='px-1' >
            <p className=' font-bold text-sm '>{item?.title ||<Skeleton width={150}/> }</p>
            <p className=' text-xs '>{item?.timeAgo || <Skeleton width={100} /> }</p>
          </div>
          <div>
            {item?.promised && <button className=' border-[1px] bg-red-400 text-xs px-2 py-1 rounded-sm  text-white '>promised </button>
            }
          </div>
        </div>
      </div>
    </Link>

  )
}

export default ItemCard
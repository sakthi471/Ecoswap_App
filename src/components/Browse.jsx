'use client'
import React, { useState } from 'react'
import Search from './Search'
import ItemCard from './ItemCard'
import Loader from './Loader'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import DataNotFound from './DataNotFound'

const Browse = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
 
    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
      };
      
    
      const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
      };


      post?.map((item) => (
        <ItemCard key={item._id} item={item} />
    ))
    return (
        <div className=' w-full flex  flex-col  '>
            <Search setPost={setPost} setLoading={setLoading} page={page} setTotalPages={setTotalPages} />
            <div className=' flex w-full min-h-[300px] flex-wrap justify-center gap-14 py-8 items-center'>
                {
                    loading ? ( Array(8).fill().map((_, i) => <ItemCard key={i} />)
                ) : (
                        post.length !==0 ?(
                             post?.map((item) => (
                            <ItemCard key={item._id} item={item} />
                        ))
                        ):
                        (<DataNotFound message=' Data Not Found For You Search' />)
                    )
                }

            </div>
            <div className='w-full flex gap-5 justify-center '>
                <button  className={` hover:shadow-xl flex gap-2 items-center hover:bg-accent hover:text-white p-2 border-[1px] border-primary   text-primary rounded-md ${page==1? 'cursor-not-allowed opacity-50':''} `}  onClick={handlePreviousPage} disabled={page === 1}> <FaChevronLeft/> </button>
            <button  className={` hover:shadow-xl flex gap-2 items-center hover:bg-accent hover:text-white p-2 border-[1px] border-primary  text-primary rounded-md ${page>=totalPages? 'cursor-not-allowed opacity-50':'' } `} onClick={handleNextPage} disabled={page >= totalPages} ><FaChevronRight/> </button>
            </div>
        </div>
    )
}

export default Browse
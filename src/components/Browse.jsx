'use client'
import React, { useState } from 'react'
import Search from './Search'
import ItemCard from './ItemCard'
import Loader from './Loader'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Browse = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    // Number of items per page
 
    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
      };
      
    
      const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
      };

    return (
        <div className=' w-full flex  flex-col  '>
            <Search setPost={setPost} setLoading={setLoading} page={page} setTotalPages={setTotalPages} />
            <div className=' flex w-full min-h-[400px] flex-wrap justify-center gap-14 py-8 items-center'>
                {
                    loading ? (<Loader message='please wait' size='50' />) : (
                        post?.map((item) => (
                            <ItemCard key={item._id} item={item} />
                        ))
                    )
                }

            </div>
            <div className='w-full flex gap-5 justify-center '>
                <button  className={` hover:shadow-xl flex gap-2 items-center hover:bg-accent p-2 bg-primary  text-white rounded-md ${page==1? 'cursor-not-allowed opacity-50':''} `}  onClick={handlePreviousPage} disabled={page === 1}> <FaChevronLeft/>Previous </button>
            <button  className={` hover:shadow-xl flex gap-2 items-center hover:bg-accent p-2 bg-primary text-white rounded-md ${page>=totalPages? 'cursor-not-allowed opacity-50':'' } `} onClick={handleNextPage} disabled={page >= totalPages} >Next <FaChevronRight/> </button>
            </div>
        </div>
    )
}

export default Browse
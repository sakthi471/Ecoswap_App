'use client'
import React, { useEffect, useState } from 'react'

const Search = ({ setPost,setLoading ,page, setTotalPages}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  const pageSize = 8
  
  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeout = setTimeout(async () => {
      setLoading(true)
      const res = await fetch(`/api/browse?query=${searchQuery}&page=${page}&pageSize=${pageSize}`)
      const data = await res.json()
      console.log(data);
      setPost(data.posts)
      setTotalPages(data.totalPages)
      setLoading(false)
     
    }, 1200);

    setTypingTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [searchQuery,page]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className='  px-12 my-4'>
      <input onChange={handleSearchChange} value={searchQuery} className='px-4 py-2 w-[350px]  focus:outline-accent border-2  rounded-md border-slate-500 ' type="text" placeholder='Search ' />
    </div> 
  )
}

export default Search
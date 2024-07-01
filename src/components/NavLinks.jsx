"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({item}) => {
   const path=usePathname()
  return (
  <Link href={item.url} className={`cursor-pointer list-none  capitalize text-sm    ${path==item.url && "border-b-[3px] border-primary"} ${item.title=='login' && " bg-primary text-white border-none text-sm  px-4 py-[3px] hover:bg-accent rounded-full"} ${item.title==='register' && " bg-green-500    text-sm  px-4 py-[3px] border-none hover:bg-green-600 text-white rounded-full"}` } >{item.title}</Link>

  )
}

export default NavLinks
import React from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from 'next/link'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='text-white text-xs md:text-base max-w-[610px] flex flex-col sm:flex-row gap-4 justify-between items-center  mx-auto mt-[46px] bg-white/0 backdrop-blur-md rounded-full fixed top-0 right-0 left-0 z-10'>
        <Link href={"/"} className='order-2 sm:order-none cursor-pointer'>
        <Logo   />
        </Link>

        <div className='flex items-center  gap-5  w-full sm:w-fit px-2 '>
            <Link href={"/pricing"} className=''>
            <Button title='Upgrade'  className='px-3 ' />
            </Link>
            <Link href={'/use-cases'} className='ml-auto sm:ml-0 cursor-pointer'>
                Use Cases
            </Link>
           <Avatar className=''> 
            <AvatarImage className='' src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </div>
    </div>
  )
}
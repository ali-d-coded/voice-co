import Image from 'next/image'
import React from 'react'

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <div className='max-h-[51px] min-h-[40px] max-w-[580px] w-full border rounded-xl border-[#FFFFFF]/10 px-2'>
        <div className='flex items-center  h-[40px]'>
            <Image src={"/search-normal.svg"} alt='search icon' width={25} height={25} />
            <input className='w-full h-full bg-transparent border-none outline-none px-2' placeholder='Search Notes' type="text" />
        </div>
    </div>
  )
}
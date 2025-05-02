import React from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='max-w-[610px] flex justify-between items-center  mx-auto mt-[46px] bg-white/0 backdrop-blur-md rounded-full fixed top-0 right-0 left-0'>
        <Logo />

        <div className='flex justify-between items-center gap-5'>
            <span className=''>
                Use Cases
            </span>
            <span>
            <Button title='Upgrade'  className='px-3' />
            </span>
            <span className='bg-[#FFFFFF]/20 rounded-full w-10 h-10'>

            </span>
        </div>
    </div>
  )
}
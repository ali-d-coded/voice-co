import Image from 'next/image'
import React from 'react'

type Props = {}

export default function TakeNotesCard({}: Props) {
  return (
    <div className='text-white max-w-[300px] p-2  fixed bottom-10 mx-auto  right-0 left-0 bg-white/3 backdrop-blur-md rounded-full border border-white/5 flex gap-3'>
        <button className='w-full h-full bg-white/5 rounded-full cursor-pointer p-4'>
        <div className='flex gap-2 justify-center'>
           <Image src="note-add.svg" alt='notes add icon' width={20} height={20} />
            Notes
        </div>
        </button>
        <button className='w-full h-full bg-white/5 rounded-full cursor-pointer p-4'>
        <div className='flex gap-2 justify-center'>
        <Image src="microphone-red.svg" alt='micorphone icon' width={25} height={20} />
        Record
        </div>
        </button>

    </div>
  )
}
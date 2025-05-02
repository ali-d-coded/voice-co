import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Logo({}: Props) {
  return (
    <button className='flex gap-2 border border-[#FFFFFF]/20 rounded-4xl px-5 py-3'>
        <Image alt='d' src={'/microphone.svg'} width={20} height={20}  />

        <span className=''>
            VoiceCo
        </span>
    </button>
  )
}
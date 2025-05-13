import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
}

export default function Logo({className}: Props) {
  return (
    <button className={cn('flex gap-2 border border-[#FFFFFF]/20 rounded-4xl px-2 py-2 md:px-5 md:py-3', className)}>
        <Image alt='d' src={'/microphone.svg'} width={20} height={20}  />

        <span className='text-white'>
            VoiceCo
        </span>
    </button>
  )
}
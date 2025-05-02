import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title: string,
    onClick?: () => void,
    icon?: React.ReactNode,
    className?:string
}

export default function Button({title,onClick,icon,className}: Props) {
  return (
    <button onClick={onClick} className={cn("bg-[#FFFFFF]/20 rounded-lg p-1 h-[36px] w-fit flex items-center justify-center cursor-pointer",className)}>
        <span>
        {icon}
        </span>

        <span className=''>
            {title}
        </span>

    </button>
  )
}
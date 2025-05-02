import React from 'react'
import Button from './ui/Button'
import Image from 'next/image'

type Props = {}

const buttons = [
    {
        title: 'All',
        icon: null,
        onclick: () => {}
    },
    {
        title: 'Voice Notes',
        icon: <Image src="microphone-2.svg" alt='micorphone icon' width={20} height={20} />,
        onclick: () => {}
    },
    {
        title: 'Notes',
        icon: <Image src="note-add.svg" alt='notes add icon' width={20} height={20} />,
        onclick: () => {}
    },
    {
        title: 'Flag',
        icon: <Image src="flag-2.svg" alt='flag icon' width={20} height={20} />,
        onclick: () => {}
    },
]
export default function UtilityButtonGroup({}: Props) {
  return (
    <div className='flex gap-4 items-center my-4'>
        {buttons.map((btn,i) => (
            <Button key={i} title={btn.title} icon={btn.icon} className='px-4 not-first:bg-[#FFFFFF]/10' />
        ))
        }
    </div>
  )
}
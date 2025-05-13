import React from 'react'

type Props = {
  title?: string,
  note?: string,
  voice?: any,
  datetime: string,

}

export default function Card({title,note,voice,datetime}: Props) {
  const options : Intl.DateTimeFormatOptions = {
  month: 'short',   // Dec
  day: 'numeric',   // 18
  hour: 'numeric',  // 10
  minute: '2-digit',// 50
  hour12: true,     // AM/PM format
};
const date = new Date(datetime);

const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
const cleanFormatted = formatted.replace(',', '');
  return (
    <div
     className='w-full my-3 border rounded-xl  p-2 border-white/5 px-2  sm:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/[0.01] transition-all duration-300 text-center'
    >
      {
        !title ? 
        (
        <div className='grid gap-3 justify-center '>
            <p className='font-inter text-2xl font-semibold capitalize'>
            No Voice Notes yet
            </p>
            <p className='font-inter '>
            Start recording or add a note to see your smart <br /> transcription here.
            </p>
            <button className='p-3 bg-white/5 rounded-xl cursor-pointer'>
            Record your first note
            </button>
        </div>
        ) : 
        (
        <div>

          <div className='flex justify-between mt-2'>
            <p className='font-inter text-xs text-white/80'>
            {cleanFormatted}
            </p>

            <div className='bg-gray-500 rounded-full w-7 h-7'>
              {/* . . . */}
            </div>
          </div>
          <div className='flex items-center justify-between '>
            <p className='font-inter text-sm md:text-[16px] font-semibold capitalize'>
            {title}
            </p>
          </div>

          <p className='font-inter text-sm md:text-[16px] mt-2 text-left text-white/80 leading-[24px]'>
          {note}
          </p>
          
          {voice &&
          <div className='bg-white/15 w-fit py-[5px] rounded-2xl text-xs md:text-sm px-3 flex gap-1 mt-3'>
            D 
            <span>
              01:00
            </span>
          </div>
          }

        </div>
        )
      }

    </div>
  )
}
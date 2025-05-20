import { button, div, li } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'


const pricing = [
    {
        id:1,
        price:"0.00",
        frequency:"",
        tag:"Free",
        title:"Free Forever",
        description:"Start for free. Upgrade when you need more power.",
        features:[
            "🎤 10 mins per upload",
            "🧠 Basic transcription",
            "📤 Download text",
            "✅ No login required",
        ],
        button:"Start Free"
    },
    {
        id:2,
        price:"9.00",
        frequency:"monthly",
        tag:"Pro",
        title:"Pro Plan",
        description:"Pro description",
        features:[
            "🕒 60 mins per file",
            "✨ Smart summaries & bullet points",
            "🔗 Export to Notion / Email",
            "🗂️ Organize voice notes",
        ],
        button:"Upgrade to Pro"
    },
]
export default function PricingPage() {
  return (
    <div className='mt-10 backdrop-blur-2xl sm:bg-white/[0.001] rounded-[48px] sm:border-1 sm:border-white/10 px-2  sm:p-6  text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/[0.01] transition-all duration-300 text-center'>
            <h1 className="text-center font-serif-4 text-4xl px-1 text-transparent bg-clip-text bg-[radial-gradient(circle,rgba(236,236,238,0.8)_67%,rgba(255,255,255,0.07)_100%)]">
    Pricing
  </h1>
  <p className='text-[16px] text-white/70 my-5 leading-6 max-w-[300px] mx-auto'>
    Start for free. Upgrade when you need more power.
  </p>

    <section className='grid gap-2 w-full '>
        {
            pricing.map(price => (
                <div key={price.id} className='bg-white/5 border border-white/10 rounded-[24px] p-4 min-h-[226px]  flex flex-col relative'>
                    
                    <div className='font-serif-4 flex justify-between text-3xl my-2'> 
                        <span className='text-3xl'>
                            ${price.price}
                        </span>

                        <span className='font-sans font-[100_!important]'>
                            {price.tag} 
                        </span>
                    </div>

                    <div className='text-left '>
                        <ul className='leading-10'>
                            {
                                price.features.map(fe => (
                                    <li key={fe}>
                                        {fe}
                                    </li>

                                ))
                            }
                        </ul>


                    </div>
                    <div className='flex mt-5 sm:absolute sm:right-2 sm:bottom-3 '>
                        {
                            price.tag == 'Free' ? (
                                <button className='bg-white/20 rounded-4xl py-2 px-3 '>
                                    Start Free
                                </button>
                            ) : (
                                <button className='bg-white text-black rounded-4xl py-2 px-3 font-semibold flex gap-1 shrink-0'>
                                    <Image src={"/crown.svg"} width={20} height={20} alt='crown' />
                                    Upgrade to Pro
                                </button>
                            )
                        }
                    </div>

               
                </div>

            ))
        }
    </section>
    </div>
  )
}

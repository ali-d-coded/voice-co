import React from 'react'


const useCases = [
    {
        id:1,
        title:"Meetings to Action Items",
        description:"Record client or team meetings and get instant summaries with key tasks.",
        tag:""
    },
    {
        id:2,
        title:"Voice Notes to Text",
        description:"Upload WhatsApp or Instagram voice messages and read them like chat.",
        tag:""
    },
    {
        id:3,
        title:"Lectures to Notes",
        description:"Record class or webinars and auto-convert them into clean, structured notes.",
        tag:"coming soon"
    },
    {
        id:4,
        title:"Podcasts to Content",
        description:"Transcribe audio episodes into editable blog posts, captions, or newsletters.",
        tag:"coming soon"
    },
]
export default function useCasesPage() {
  return (
    <div className='mt-10 backdrop-blur-2xl sm:bg-white/[0.001] rounded-[48px] sm:border-1 sm:border-white/10 px-2  sm:p-6  text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/[0.01] transition-all duration-300 text-center'>
     <h1 className="text-center font-serif-4 text-2xl px-1 sm:text-3xl text-transparent bg-clip-text bg-[radial-gradient(circle,rgba(236,236,238,0.8)_67%,rgba(255,255,255,0.07)_100%)]">
    Real Time Savers.
  </h1>
  <p className='text-[16px] text-white/70 my-4 leading-6 max-w-[400px] mx-auto'>
    From meetings to messages, see how voice-to-text makes everyday work faster and easier.
  </p>

    
    <div className='grid justify-center sm:grid-cols-2 gap-2 '>
        {
            useCases.map(uc => (
                <div key={uc.id} className='bg-white/5 border border-white/10 rounded-[24px] p-4 min-h-[226px] min-w-[279px] max-w-[279px] flex flex-col'>
                    {
                        uc.tag && (
                    <div className='text-white bg-white/10 rounded-4xl w-fit px-3 py-2 text-[16px] capitalize'>
                        {uc.tag}
                    </div>
                        )
                    }

                {/* This will now be pushed to the bottom */}
                <div className='mt-auto text-left min-h-24 flex flex-col justify-between gap-2'>
                    <h2 className='text-white text-xl font-serif'>{uc.title}</h2>
                    <p className='text-white/70 text-[16px]'>{uc.description}</p>
                </div>
                </div>

            ))
        }
    </div>
    </div>
  )
}

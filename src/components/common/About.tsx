import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section   className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[NeueMontreal] text-[4vw] leading-[4.5vw] trackging-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#A1B562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach</h1>
                <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
                    Read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-[#B0C859]'></div>
        </div>
    </div>
  )
}

export default About
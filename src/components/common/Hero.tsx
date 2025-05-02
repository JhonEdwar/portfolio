import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Hero() {
  return (
    <div className='w-full h-vh bg-zinc-900 pt-1'>
        <div className='texstructure mt-40 px-20'>
            {[
            "We created","eye opening","presentation"
            ].map((item, index)=>
                {
                    return(<div key={index} className='masker '>
                        <div className='w-fit flex items-end  overflow-hidden '>
                            {index === 1 && (
                                <motion.div 
                                initial={{width:0}} 
                                animate={{width:"8vw"}}
                                transition={{ease:[0.76, 0,0.24,1], duration:1}}
                                className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md relative -top-[0.2vw]  bg-green-500'>
                                </motion.div>)}
                            <h1 className='pt-[2vw]  uppercase text-[9vw] leading-[.75] font-[FoundersGrotesk]'>
                                {item}
                            </h1>
                        </div>
                    </div>)
                }
            )}
    
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {[
            "For public and private companies", 
            "For the first pitch to IPO"
            ].map((item, index)=>(
                <p key={index} className='text-md font-light trackging-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>
                    start the project
                </div>
                <div className='w-10 h-10 border-[1px] flex justify-center items-center border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
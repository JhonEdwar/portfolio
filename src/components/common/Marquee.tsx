import React from 'react'
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section  className='w-full h-[400px] py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div   className='border-t-2 border-b-2 border-zinc-300  overflow-hidden '>
          <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text  flex whitespace-nowrap gap-10'>
             <h3 className='text-[20vw] leading-none font-[FoundersGrotesk] uppercase '> we are ochi</h3>
            <h3 className='text-[20vw] leading-none font-[FoundersGrotesk] uppercase '> we are ochi</h3>
            <h3 className='text-[20vw] leading-none font-[FoundersGrotesk] uppercase '> we are ochi</h3>
          </motion.div>
        </div>
    </div>
  )
}

export default Marquee


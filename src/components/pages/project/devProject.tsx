import React from 'react'
import { useParams } from 'react-router-dom'
import { devProjectsMock } from '../../../mock/devProjectsMock';
// import { motion } from 'framer-motion';
// import React,{useEffect,useRef} from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DevProject = () => {
    const { id } = useParams<{ id: string }>();
    const item= devProjectsMock.find((item)=>item.id === id)


  return (
    <div className='w-full h-screen overflow-hidden bg-zinc-900 px-20'>
        <div className=' w-1/2 '>
            <h2 className=' text-stone-50 uppercase text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
                {item? item.label: undefined}
            </h2>
    
            <div className='w-full mt-10'>
                <p className=' text-lg font-[NeueMontreal] text-stone-400 font-light tracking-wide  '>
                 {item? item.description: undefined}
                </p>
            </div>  
        </div>

    </div>
  )
}


export default DevProject

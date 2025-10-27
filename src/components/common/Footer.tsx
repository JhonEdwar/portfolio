import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md"
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";



const Footer = () => {
  return (
    <div id='contact'  className='w-full rounded-tl-3xl  bg-zinc-900 overflow-hidden ' >
      
        <div className='w-full text-stone-300 px-20 border-t-[1px] border-zinc-700 py-15  text-md font-[NeueMontreal] tracking-normal flex flex-col gap-5 justify-center items-start'>
            <p className='flex justify-start items-center gap-2' >
                 <MdOutlinePhoneAndroid className='text-[#CDEA68]' /> +57 310 2915595
            </p>
            <p className='flex justify-start items-center gap-2'>
                 <MdEmail className='text-[#CDEA68]' /> jhonedwar192@gmail.com
            </p>
            <p className='flex justify-start items-center gap-2' >
                <MdLocationPin className='text-[#CDEA68]' /> Bogotá, Colombia
            </p>
        </div>
       
    </div>
  )
}

export default Footer





{/* <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>
<div className='w-1/2 h-full flex flex-col justify-between '>
    <div className='heading'>
        <h2 className='text-[8vw] font-semibold uppercase leading-none -mb-10'> Jhon </h2>
    </div>
</div>
<div className='w-1/2 h-full flex flex-col justify-between '>
    <h2 className='text-[8vw] font-semibold uppercase leading-none -mb-10'> Presentations</h2>
    <div className='dets mt-10'>
        <a className='block' href="#">Instagram</a>
        <a className='block' href="#">Twitter</a>
        <a className='block' href="#">Linkedin</a>
    </div>
</div>
</div> */}
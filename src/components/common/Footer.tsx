import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>
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
    </div>
  )
}

export default Footer
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsMock } from '../../../projectsMock';
import { div } from 'framer-motion/client';

function Project() {
    const { id } = useParams<{ id: string }>();
    const item= projectsMock.find((item)=>item.id === id)

    return (
    <div className='w-full bg-zinc-900 text-white'>
      <div className='w-full flex flex-col items-center justify-center '>
        {item?.images.map((image,index)=>{
          return(
            <>
              {item.videoTest[0] && item.id === "2" && index === 2 ? (
                <div className='relative'>
                  <img key={index} src={image} alt="" className='w-full' />
                  <div className="w-[564px] absolute top-[50px] right-[180px]">
                    <video controls className="w-full" src={item?.videoTest[0]}></video>
                    <p className="text-sm text-white mt-[8px]">Video de test</p>     
                  </div>
                </div>
              ) : item.videoTest[0] && item.id === "3" && index === 3 ? (
                <div className='relative'>
                  <img key={index} src={image} alt="" className='w-full' />
                  <div className="w-[564px] absolute top-[50px] right-[180px]">
                    <video controls className="w-full" src={item?.videoTest[0]}></video>
                    <p className="text-sm text-[#3F2173] mt-[8px]">Video de test previo al rediseño</p>     
                  </div>
                </div>
              ) : (
                <img key={index} src={image} alt="" className='w-full' />
              )}
               
            </>
          )
        })}
      </div>
      {item?.videoFinal[0] &&
        <div style={{ backgroundColor: item.bg }}  className=" w-full flex flex-col items-center justify-center py-20 px-20 ">
          <video controls className="w-full max-w-[1000px]" src={item?.videoFinal[0]}></video>
        </div>
      }
      

    </div>
  )
}

export default Project
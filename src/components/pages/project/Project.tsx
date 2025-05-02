import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsMock } from '../../../projectsMock';

function Project() {
    const { id } = useParams<{ id: string }>();
    const item= projectsMock.find((item)=>item.id === id)

    return (
    <div className='w-full bg-zinc-900 text-white'>
      <div className='w-full flex flex-col items-center justify-center '>
        {item?.images.map((image,index)=>{
          return(
            <img key={index} src={image} alt="" className='w-full' />
          )
        })}
      </div>

    </div>
  )
}

export default Project
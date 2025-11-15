import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projectsMock } from '../../../mock/projectsMock';


const DesignProject=()=>{
    const { id } = useParams<{ id: string }>();
    const item= projectsMock.find((item)=>item.id === id)

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
    <div className='w-full bg-zinc-900 text-white'>
      <div className='w-full flex flex-col items-center justify-center'>
        {item?.images.map((image,index)=>{
          return(
            <>
              {item.videoTest[0] && item.id === "2" && index === 2 ? (
                <div className='relative'>
                  <img key={index} src={image} alt="" className='w-full' />
                  <div className="w-[90%] md:w-[70%] lg:w-[564px] absolute top-[20px] right-[5%] md:top-[35px] md:right-[15%] lg:top-[50px] lg:right-[180px]">
                    <video controls className="w-full" src={item?.videoTest[0]}></video>
                    <p className="text-xs md:text-sm text-white mt-[4px] md:mt-[8px]">Video de test</p>
                  </div>
                </div>
              ) : item.videoTest[0] && item.id === "3" && index === 3 ? (
                <div className='relative'>
                  <img key={index} src={image} alt="" className='w-full' />
                  <div className="w-[90%] md:w-[70%] lg:w-[564px] absolute top-[20px] right-[5%] md:top-[35px] md:right-[15%] lg:top-[50px] lg:right-[180px]">
                    <video controls className="w-full" src={item?.videoTest[0]}></video>
                    <p className="text-xs md:text-sm text-[#3F2173] mt-[4px] md:mt-[8px]">Video de test previo al rediseño</p>
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
        <div style={{ backgroundColor: item.bg }} className="w-full flex flex-col items-center justify-center py-10 px-5 md:py-16 md:px-12 lg:py-20 lg:px-20">
          <video controls className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]" src={item?.videoFinal[0]}></video>
        </div>
      }


    </div>
  )
}

export default DesignProject
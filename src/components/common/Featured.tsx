import { useState} from 'react'
import { motion, AnimatePresence  } from "framer-motion";
import { projectsMock } from '../../mock/projectsMock';
// import { devProjectsMock } from '../../mock/devProjectsMock';
import { Link } from 'react-router-dom';


const Featured = () => {

  const [hoveredId, setHoveredId] = useState<string | null>(null);


  return (
    <div id='projects'  className='w-full rounded-tl-3xl rounded-tr-3xl py-20 px-20 bg-zinc-900 relative is-inview' >
        <div className='w-full flex justify-center items-center relative'>
          <img className='w-[185px] absolute -left-[70px] -top-[200px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/plsuq6xkryqoxsqfed3f" alt="" />
          <img className='w-[100px] absolute left-[40px] -top-[140px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/gvtk5x9i0epwvdxyxowb" alt="" />

        </div>
        <div className='w-full border-b-[1px] border-zinc-700 pb-20 '>
            <h1 className='text-7xl font tracking-wide font-[FoundersGrotesk] uppercase'> Feature projects</h1>
        </div>
        <div>
            <div className=' cards w-full mt-10 grid grid-cols-2 gap-[30px]'>
                   {projectsMock.map(((item,index)=>{
                    return (
                      <Link to={`/project/${item.id}`} 
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`relative cardcontainer w-full h-[418px]  rounded-3xl `} 
                      key={item.id}
                      >
                        <motion.div animate={{ scale: hoveredId===item.id ? 0.97 : 1 }} transition={{ease:[0.33, 1, 0.68, 1],duration:0.8}} className='w-full h-full rounded-3xl bg-cover bg-center overflow-hidden'>
                          <motion.img animate={{ scale: hoveredId===item.id ? 1.2 : 1 }} transition={{ease:[0.33, 1, 0.68, 1],duration:0.8}} className='w-full h-full object-cover' src={item.thumbnail} alt="" />
                        </motion.div>
                        
                        <AnimatePresence>
                            {hoveredId === item.id && (
                                <motion.h3  
                                className={`absolute w-ful h-[auto] justify-center flex flex-nowrap ${index%2===0 ? 'left-full  -translate-x-[45%] ' : 'right-full translate-x-[45%] '}  top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-wide font-[FoundersGrotesk] uppercase text-[#CDEA68]`}                         
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                  visible: {
                                    transition: {
                                      delayChildren: 0.2, 
                                      staggerChildren: 0.04,
                                    },
                                  },
                                  exit: {
                                    transition: {
                                      staggerChildren: 0.02,
                                      staggerDirection: -1,
                                    },
                                  },
                                }}
                                >
                                      {item.label.split("").map((char, i) => (
                                        <span className="inline-block overflow-hidden" key={i}>
                                            <motion.span
                                              key={i}
                                              variants={{
                                                hidden: { y: 50, opacity: 0 },
                                                visible: { y: 0, opacity: 1 },
                                                exit: { y: 50, opacity: 0 },
                                              }}
                                              transition={{ duration: 0.2,ease: [0.22, 2, 0.36, 1],}}
                                            
                                              className="inline-block"
                                            >
                                              {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        </span>
                                      ))}
                                </motion.h3>
                            ) }
                        </AnimatePresence>  
                        
                          
                      </Link>
                   )
                   }
                  ))}
                
            </div>
            
        </div>
       
    </div>
  )
}

export default Featured


// *
import React,{ useState } from 'react'
import { motion } from "framer-motion";
import { projectsMock } from '../../projectsMock';
import { Link } from 'react-router-dom';


const Featured = () => {

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 '>
            <h1 className='text-7xl font tracking-wide font-[FoundersGrotesk]'> Feature projects</h1>
        </div>
        <div className='px-20'>
            <div className=' cards w-full mt-10 grid grid-cols-2 gap-[30px]'>
                   {projectsMock.map(((item,index)=>{
                    return (
                      <Link to={`/project/${item.id}`} 
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`relative cardcontainer w-full h-[60vh]  rounded-3xl `} 
                      key={item.id}
                      >
                        <motion.div animate={{ scale: hoveredId===item.id ? 0.97 : 1 }} transition={{ease:[0.33, 1, 0.68, 1],duration:0.8}} className='w-full h-full rounded-3xl bg-cover bg-center overflow-hidden'>
                          <motion.img animate={{ scale: hoveredId===item.id ? 1.2 : 1 }} transition={{ease:[0.33, 1, 0.68, 1],duration:0.8}} className='w-full h-full object-cover' src={item.thumbnail} alt="" />
                        </motion.div>
                        
                          
                        {hoveredId === item.id && (
                            <motion.h3  
                            className={`absolute w-full  h-[auto] justify-center flex flex-nowrap ${index%2===0 ? 'left-full  -translate-x-[45%] ' : 'right-full translate-x-[45%] '}  top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-wide font-[FoundersGrotesk] uppercase`}                         
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.05, 
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
                                          }}
                                          transition={{ duration: 0.3, ease: "easeOut" }}
                                          className="inline-block"
                                        >
                                          {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    </span>
                                  ))}
                            </motion.h3>
                        ) }
                        
                        
                          
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

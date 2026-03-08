import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { projectsMock } from '../../mock/projectsMock';
import { devProjectsMock } from '../../mock/devProjectsMock';
import { Link } from 'react-router-dom';

type ProjectType = 'design-project' | 'dev-project';

const Featured = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ProjectType>('design-project');
  

  // Seleccionar los proyectos según el tab activo
  const currentProjects = activeTab === 'design-project' ? projectsMock : devProjectsMock;

  return (
    <div id='projects' className='w-full rounded-tl-3xl rounded-tr-3xl py-10 px-5 md:py-16 md:px-12 lg:py-20 lg:px-20 bg-zinc-900 relative is-inview'>
      <div className='w-full flex justify-center items-center relative'>
        <img className='w-[120px] md:w-[150px] lg:w-[185px] absolute -left-[40px] md:-left-[55px] lg:-left-[70px] -top-[130px] md:-top-[165px] lg:-top-[200px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/plsuq6xkryqoxsqfed3f" alt="" />
        <img className='w-[65px] md:w-[80px] lg:w-[100px] absolute left-[25px] md:left-[32px] lg:left-[40px] -top-[95px] md:-top-[120px] lg:-top-[140px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/gvtk5x9i0epwvdxyxowb" alt="" />
      </div>

      <div className='w-full border-b-[1px] border-zinc-700 pb-10 md:pb-16 lg:pb-20 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font tracking-wide font-[FoundersGrotesk] uppercase'>Feature projects</h1>

        {/* Segment Control */}
        <div className='flex justify-center mt-2 md:mt-3'>
          <div className='relative inline-flex bg-zinc-800 rounded-full p-1.5 gap-1.5 md:gap-2'>
            <motion.div
              className='absolute top-1.5 bg-[#CDEA68] rounded-full'
              animate={{
                x: activeTab === 'design-project' ? 0 : (typeof window !== 'undefined' && window.innerWidth < 768) ? 120 : 182,
              }}
              style={{
                height: 'calc(100% - 12px)',
                width: typeof window !== 'undefined' && window.innerWidth < 768 ? 115 : 176,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />

            <button
              onClick={() => setActiveTab('design-project')}
              className={`relative z-10 w-28 md:w-44 py-2 md:py-3 rounded-full font-[FoundersGrotesk] text-xl md:text-3xl font-medium transition-colors duration-300 ${
                activeTab === 'design-project' ? 'text-zinc-900' : 'text-zinc-400'
              }`}
            >
              UX / UI
            </button>
            <button
              onClick={() => setActiveTab('dev-project')}
              className={`relative z-10 w-28 md:w-44 py-2 md:py-3 rounded-full font-[FoundersGrotesk] text-xl md:text-3xl font-medium transition-colors duration-300 ${
                activeTab === 'dev-project' ? 'text-zinc-900' : 'text-zinc-400'
              }`}
            >
              Development
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* Grid de proyectos con animación de entrada */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='cards w-full mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[30px]'
          >
            {currentProjects.map((item, index) => {
              return (
                <Link
                  to={`/${activeTab}/${item.id}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative cardcontainer w-full h-[280px] md:h-[350px] lg:h-[418px] rounded-2xl md:rounded-3xl`}
                  key={item.id}
                >
                  <motion.div
                    animate={{ scale: hoveredId === item.id ? 0.97 : 1 }}
                    transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
                    className='w-full h-full rounded-2xl md:rounded-3xl bg-cover bg-center overflow-hidden'
                  >
                    <motion.img
                      animate={{ scale: hoveredId === item.id ? 1.2 : 1 }}
                      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
                      className='w-full h-full object-cover'
                      src={item.thumbnail}
                      alt=""
                    />
                  </motion.div>

                  <AnimatePresence>
                    {hoveredId === item.id && (
                      <motion.h3
                        className={`hidden lg:flex absolute w-ful h-[auto] justify-center flex-nowrap ${
                          index % 2 === 0 ? 'left-full -translate-x-[45%]' : 'right-full translate-x-[45%]'
                        } top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-wide font-[FoundersGrotesk] uppercase text-[#CDEA68]`}
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
                          <span className="inline-block overflow-hidden " key={i}>
                            <motion.span
                              variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 },
                                exit: { y: 50, opacity: 0 },
                              }}
                              transition={{ duration: 0.2, ease: [0.22, 2, 0.36, 1] }}
                              className="inline-block bg-[#ffffff]"
                            >
                              {char === " " ? "\u00A0" : char}
                            </motion.span>
                          </span>
                        ))}
                      </motion.h3>
                    )}
                  </AnimatePresence>
                </Link>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Featured
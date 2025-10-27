import { motion,useAnimation } from 'framer-motion';
import React,{useEffect,useRef} from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {id:"#item-0", translateY: 0, delay: 0.5},
  {id:"#item-1", translateY: 0, delay: 0},
  {id:"#item-2", translateY: 0, delay: 0.2},
  {id:"#item-3", translateY: 0, delay: 0.8},
]

function Hero() {
  const wrapperRef = useRef(null);
  // const item1Ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start({ x: 0, transition: { duration: 1 , ease:[0.76, 0,0.24,1]} });
      await controls.start({ rotate: -20, transition: { duration: 0.3 } });
    };
    runAnimation();
  }, [controls]);

  useEffect(() => {
    
    items.forEach((item) => {
      gsap.fromTo(item.id,{
          y:200,
          opacity:0,
          
        },
        {
          y:0,
          opacity:1,
          duration:1,
          delay:item.delay,
          ease: "power3.out"
        }
      )

      const scrollItems = ScrollTrigger.create({
      trigger: "#container-1",
      start: "15% 20%",
      end: "bottom center",
      onUpdate:(self) => {
        if(self.direction === 1) {
          gsap.to(item.id, {
          opacity: 0,
          y: 100,
          duration: 1,
          delay:item.delay,
          ease: "power3.out"

        });
          }else {
          gsap.to(item.id, {
            opacity: 1,
            y: 0,
            duration: 1, 
            delay:item.delay, 
            ease: "power3.out"

          });
        }
      }
  })

  return () => {
      scrollItems.kill();
    };
  })
    
  }, []);

  return (
    <div ref={wrapperRef} className='w-full h-auto bg-zinc-900 py-20 px-20  flex justify-between items-center'>
        <div className='texstructure  w-1/2  '>
                    <div className=' flex flex-wrap items-end py-1 overflow-hidden '>
                            <motion.div 
                            animate={controls}
                            initial={{ x: -70, rotate: 0 }}
                            // initial={{x: -70}} 
                            // animate={{x:0}}
                            // transition={{ease:[0.76, 0,0.24,1], duration:1}}
                            className='mr-[10px]  w-[70px] h-[70px] top-[5px] relative '
                            // className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md relative -top-[0.2vw]  bg-green-500'
                            >
                              <img className='h-full w-full' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/b7viq6rfkvqdfcmjlsgd" alt="emoji" />
                            </motion.div>
                            <h2 className='pt-[2vw]  uppercase text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
                                Hello, i'm Jhon
                            </h2>
                    </div>
                    <div className='w-full mt-10'>

                        <p className=' text-lg font-[NeueMontreal] text-stone-400 font-light tracking-wide  '>
                        I’m a product designer with a technical mindset and a curious . I work across design and code to build scalable and user-centered experiences. I care about solving real problems — not just making things look good, but making them work better.
                        </p>
                    </div>
                 
        </div>
        <div  id='container-1' className='flex justify-center items-center h-[400px] flex-col w-1/2 relative min-w-[400px]'>
              <div id='item-0' className='w-[300px] absolute -top-[10%] right-[0%]'>
                  <img alt="toroide"  src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/weehag6owalt6miqjfw2"  />
              </div>
              <div id='item-1'  className='w-[350px] absolute  left-[10%]'>
                 <img alt="computador"  src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/efrrm1myumf8e1tsvqaw" />              
              </div>
              <div id='item-2' className='w-[250px] absolute left-[52%] bottom-[15%]'>
                  <img alt="flecha"  src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/igklms3atnkruszkatao"  />
              </div>
              <div id='item-3' className='w-[360px] absolute -bottom-[52%]'>
                 <img  alt="anillo cortado" src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/f9wl55qpwd6sk2dkkqd5"  />
              </div>

             
        </div>

    </div>
  )
}

export default Hero
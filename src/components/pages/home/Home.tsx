import React , {useEffect,useRef} from 'react'
import Hero from '../../common/Hero'
import About from '../../common/About'
import Featured from '../../common/Featured'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '../../common/Footer';




const Home = () => {

  // const scrollRef = useRef<HTMLDivElement  | null>(null);
  // const scrollInstance = useRef<LocomotiveScroll | null>(null);

  // useEffect(() => {
  //   if (!scrollRef.current) return;

  //   scrollInstance.current = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     // lerp: 0.1,
  //   });

  //   return () => {
  //     if (scrollInstance.current) scrollInstance.current.destroy();
  //   };
  // }, []);




  return (
    <div
    className='w-full  text-white bg-zinc-900 overflow-visible '>
     
        <Hero />
        <About />
        <Featured />
        <Footer />
     
    </div>
  )
}

export default Home
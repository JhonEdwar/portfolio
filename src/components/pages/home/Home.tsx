// import React , {useEffect,useRef} from 'react'
import Hero from '../../common/Hero'
import About from '../../common/About'
import Featured from '../../common/Featured'
// import LocomotiveScroll from 'locomotive-scroll';
import Footer from '../../common/Footer';




const Home = () => {


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
import React from 'react'
import Hero from '../../common/Hero'
import About from '../../common/About'
import Marquee from '../../common/Marquee'
import Footer from '../../common/Footer'
import Featured from '../../common/Featured'

const Home = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Hero />
      <Marquee />
      <About />
      <Featured />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
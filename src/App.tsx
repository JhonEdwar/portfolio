import React, { useEffect } from 'react'
import AppRouter from './router/AppRouter';
import Navbar from './components/common/Navbar';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function App() {

  //   useEffect(() => {
  //   ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content',
  //     smooth:2,
  //     effects: true,
  //   })
  //   ScrollTrigger.refresh();
  // }, [])

  
  return (
    <div id='smooth-content'  className="bg-zinc-900">
      <div id='smooth-content'>
        <Navbar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import AppRouter from './router/AppRouter';
import Navbar from './components/common/Navbar';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App
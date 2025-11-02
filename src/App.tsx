// import React, { useEffect } from 'react'
import AppRouter from './router/AppRouter';
import Navbar from './components/common/Navbar';



function App() {

  return (
    <div  className="bg-zinc-900">
      <div >
        <Navbar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
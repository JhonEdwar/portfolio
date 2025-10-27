import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from '../components/pages/home/Home.tsx'
import DesignProject from '../components/pages/project/designProject.tsx'
import DevProject from '../components/pages/project/designProject.tsx'

const AppRouter = () => {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project/:id' element={<DesignProject/>}/>
    <Route path='/project/:id' element={<DevProject/>}/>
    <Route path='/*' element={<Navigate to='/'/>}/>
  </Routes>
  )
}

export default AppRouter
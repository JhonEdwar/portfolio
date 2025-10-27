import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from '../components/pages/home/Home.tsx'
import Project from '../components/pages/project/designProject.tsx'


const AppRouter = () => {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project/:id' element={<Project/>}/>
    <Route path='/*' element={<Navigate to='/'/>}/>
  </Routes>
  )
}

export default AppRouter
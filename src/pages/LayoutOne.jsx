import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './landingpage/Navbar'

function LayoutOne() {
  return (
    
    <Routes>
        <Route exact path="/" element={<Navbar />}/>
    </Routes>
  )
}

export default LayoutOne
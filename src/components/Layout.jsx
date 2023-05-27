import React from 'react'
import Navbar from '../pages/landingpage/Navbar'
import Home from '../pages/landingpage/Home'
import Footer from '../pages/landingpage/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
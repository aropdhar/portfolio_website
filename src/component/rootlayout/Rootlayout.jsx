import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Rootlayout

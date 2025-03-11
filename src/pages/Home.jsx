import React from 'react'
import Navbar from '../component/navbar/Navbar.jsx'
import Banner from './banner/Banner.jsx'
import About from './about/About.jsx'
import PortfolioShow from './portfolioshow/PortfolioShow.jsx'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <PortfolioShow/>
    </>

  )
}

export default Home

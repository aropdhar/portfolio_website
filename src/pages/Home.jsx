import React from 'react'
import Navbar from '../component/rootlayout/navbar/Navbar.jsx'
import Banner from './banner/Banner.jsx'
import About from './about/About.jsx'
import PortfolioShow from './portfolioshow/PortfolioShow.jsx'
import Contact from './contact/Contact.jsx'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <PortfolioShow/>
      <Contact/>
    </>

  )
}

export default Home

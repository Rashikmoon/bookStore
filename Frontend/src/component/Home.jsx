import React from 'react'
import Banner from './Banner'
import Freebook from './Freebook'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
      
    </div>
    </>
  )
}

export default Home
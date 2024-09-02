import React from 'react'
import TopNavBar from '../components/TopNavBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Service from '../components/Services'
import DisplayCategory from '../components/DisplayCategory'
import FeaturedProducts from '../components/FeaturedProducts'
import Offers from '../components/Offers'
import Vendor from '../components/Vendor'
import Footer from '../components/Footer'

function Home() {
  return (
   <>
   <TopNavBar/>  
   <NavBar/>
   <HeroSection/>
   <Service/>
   <DisplayCategory/>
   <FeaturedProducts/>
   <Offers/>
   <Vendor/>
   <Footer/>
   
   </>
  )
}

export default Home
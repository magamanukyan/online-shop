import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <Slider/> 
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
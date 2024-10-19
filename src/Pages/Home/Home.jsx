import React from 'react'
import Hero from "../../Components/Home/Hero"
import Projects from '../../Components/Home/Projects'
import About from '../../Components/Home/About'
import Contact from '../../Components/Home/ContactHome'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home
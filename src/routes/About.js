import React from 'react'
import Hero from '../components/Hero'
import AboutImg from '../Assets/qNfR-night.jpg'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <>
      <Hero cName="hero-mid"
        heroImg={AboutImg}
        title='About'
        btnClass="hide"
      />
      <AboutUs/>
    </>
  )
}

export default About
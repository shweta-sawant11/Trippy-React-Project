import React from 'react'
import Hero from '../components/Hero'
import ServiceImg from '../Assets/qNfR-night.jpg'
import Trip from '../components/Trip'



const Service = () => {
  return (
    <>
      <Hero cName="hero-mid"
        heroImg={ServiceImg}
        title='Service'
        btnClass="hide"
      />
      <Trip/>
    </>
  )
}

export default Service
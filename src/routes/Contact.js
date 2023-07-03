import React from 'react'
import Hero from '../components/Hero'
import ContactImg from '../Assets/6o2m-2.jpg'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <>
      <Hero cName="hero-mid"
        heroImg={ContactImg}
        title='Contact'
        btnClass="hide"
      />
      <ContactForm/>
    </>
  )
}

export default Contact
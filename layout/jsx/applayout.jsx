import React from 'react'
import { Header } from '../../components/jsx/header'
import { Home } from '../../sections/jsx/home'
import { About } from '../../sections/jsx/about'
import { Service } from '../../sections/jsx/service'
import { Footer } from '../../components/jsx/footer'
import { Testimonial } from '../../sections/jsx/testimonial'
import { Contact } from '../../sections/jsx/contact'
export const Applayout = () => {
  return (
    <div>
      <Header/>
      <Home /> 
      <About />
      <Service/>
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  )
}

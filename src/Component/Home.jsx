import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './Navbar'
import Service from '../Component/Service/Service'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'
import Hero from './Hero/Hero';
import ProjectTab from './ProjectTab/ProjectTab';
import Menu from './Nav/Menu';
import '../'
const Home = () => {
  return (
    <div>
    <Menu/>
    <Hero/>
    <Element name="Skils">
    <Service/>
    {/* Service section content */}
  </Element>

   <Element name='project'><ProjectTab/> </Element>
  

  <Element name="contact">
    {/* Contact section content */}
    <Contact/>
  </Element>
  <Element name="footer">
    {/* Footer section content */}
    <Footer/>
  </Element>


    </div>
  )
}

export default Home

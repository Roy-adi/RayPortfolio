import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import react-icons for the icons

import './About.css'
import dp from '../../image/logo.jpg'


const About = () => {
  const [activeSection, setActiveSection] = useState('#about');

  const handleButtonClick = (targetSection, e) => {
    e.preventDefault();
    setActiveSection(targetSection);
  };
  

  return (
    <div className={`card ${activeSection === '#about' ? 'is-active' : ''}`} data-state={activeSection}>
      <div className="card-header">
        <div className="card-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
        <img className="card-avatar" src={dp} alt="avatar" />
        <h1 className="card-fullname">Aditya Roy</h1>
        <h2 className="card-jobtitle">Software Developer</h2>
      </div>
      <div className="card-main">
        <div className={`card-section ${activeSection === '#about' ? 'is-active' : ''}`} id="about">
          <div className="card-content">
            <div className="card-subtitle">ABOUT ME</div>
            <p className="card-desc">I am a B.Tech graduate and a Full-Stack Developer with a passion for Software Development and IT, specializing in JavaScript, ReactJS, Node.js, Express.js, and MongoDB. As a quick learner with a strong work ethic, I thrive in collaborative environments, building high-quality software solutions. Always eager to enhance my skills and take on new challenges, I am committed to continuous learning and innovation in the tech world..</p>
          </div>
        </div>
        <div className={`card-section ${activeSection === '#experience' ? 'is-active' : ''}`} id="experience">
          <div className="card-content">
            <div className="card-subtitle">WORK EXPERIENCE</div>
            {/* ... Experience items */}
            <p  className='card-desc'> I am currently working at HTSM Technologies Pvt. Ltd. as a MERN Stack Developer, with 1 year and 10 months of experience. During my time here, I have successfully completed 6 projects, including 4 from scratch. Notably, 2 of these projects were for the West Bengal Government's Livestock Department. My expertise lies in React.js, where I focus on building efficient and scalable web applications. </p>
          </div>
        </div>
        <div className={`card-section ${activeSection === '#contact' ? 'is-active' : ''}`} id="contact">
          <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
              <div className="card-contact">
                <FaMapMarkerAlt />
                Laketown Kolkata
              </div>
              <div className="card-contact">
                <FaPhone />
                <a className='contact-link' href='https://wa.me/8617395862' target='_blank'>8617395862 </a>
                
              </div>
              <div className="card-contact">
                <FaEnvelope /> 
                <a className='contact-link' href='mailto:adityaroy2601@gmail.com'>adityaroy2601@gmail.com</a>
              </div>
              <button className="contact-me">  <a className='contact-link' href='https://wa.me/8617395862' target='_blank'> WORK TOGETHER </a></button>
            </div>
          </div>
        </div>
        <div className="card-buttons">
        <button onClick={(e) => handleButtonClick('#about', e)} className={activeSection === '#about' ? 'is-active' : ''}>ABOUT</button>
        <button onClick={(e) => handleButtonClick('#experience', e)} className={activeSection === '#experience' ? 'is-active' : ''}>EXPERIENCE</button>
        <button onClick={(e) => handleButtonClick('#contact', e)} className={activeSection === '#contact' ? 'is-active' : ''}>CONTACT</button>
        
        </div>
      </div>
    </div>
  );
};

export default About;

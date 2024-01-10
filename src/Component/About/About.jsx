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
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">As a fresher B.Tech Graduate with a passion for Software Development and IT, my primary skills include Java, JavaScript, ReactJS, and MySQL. I am eager to put my knowledge into practice and work with a team of professionals to develop high-quality software solutions. I am a quick learner with a strong work ethic and a positive attitude, always striving to improve my skills and take on new challenges. I am currently seeking job opportunities in the software development and IT field, where I can contribute to a company's success while growing professionally.</p>
          </div>
        </div>
        <div className={`card-section ${activeSection === '#experience' ? 'is-active' : ''}`} id="experience">
          <div className="card-content">
            <div className="card-subtitle">WORK EXPERIENCE</div>
            {/* ... Experience items */}
            <p  className='card-desc'> As a Front End Developer work in Startup softwear company <br/> Technology work with : HTML, Bootstrap, JavaScript , ReactJS , <br/> Pioneered user-centric interfaces for e-commerce and booking web apps,
            seamlessly merging design aesthetics with flawless functionality. Utilized
            HTML, CSS, JavaScript & React to craft engaging web solutions. Adeptly
            collaborated across teams, consistently exceeding project expectations and
            timelines </p>
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

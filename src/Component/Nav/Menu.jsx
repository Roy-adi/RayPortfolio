import React, { useState } from 'react';
import './Menu.css';

import { Link, animateScroll as scroll } from 'react-scroll';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='navy'>
      <div className="container0">
        <div id="i" className={`inav ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
        </div>
      </div>

      <ul id="nav-id" className={`navq ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <a href="#HOME">HOME</a>
        <Link activeClass="active"
        className='menu-link'
        to="Skils"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>Skills</Link>
        <Link to="project"
        className='menu-link'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>Project</Link>
        <Link  activeClass="active"
        to="contact"
        className='menu-link'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>CONTACT</Link>
      </ul>
    </div>
  );
};

export default Menu;

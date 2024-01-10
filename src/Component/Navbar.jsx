import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="Skils"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Footer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

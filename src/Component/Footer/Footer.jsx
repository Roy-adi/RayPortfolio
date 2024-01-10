import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" >
      <div className="container d-flex justify-content-center py-5">
       <a href='https://instagram.com/ray__adi?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
      
       <FontAwesomeIcon icon={fab.faInstagram} />
       </button> </a> 
        <a target='_blank' href='https://github.com/Roy-adi'> <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <FontAwesomeIcon icon={fab.faGithub} />
        </button></a>
       <a target='_blank' href='https://www.linkedin.com/in/aditya-roy-962289223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' > <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
       <FontAwesomeIcon icon={fab.faLinkedin} />
       </button> </a>
        
      </div>

      {/* Copyright */}
      <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Copyright:
        <a className="text-white" style={{marginLeft: '10px'}} href="#">aditya</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

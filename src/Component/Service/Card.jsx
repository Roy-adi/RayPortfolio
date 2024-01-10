import React from 'react';
import './Card.css'

import cv from '../../image/AdityaRoyResume.pdf'
import { Button } from 'bootstrap';
const Card = () => {
  return (
    <div className="card">
      <h1 className="card-title" style={{textAlign:'center'}}>The Skills I Have </h1>
       <h5 style={{textAlign:'center'}}>Frontend Skills</h5>
      <ul className="card-get_list">
        <li className="card-get_list__item"><strong>React.js : </strong> Crafting dynamic and responsive user interfaces.</li>
        <li className="card-get_list__item"><strong>NEXT.JS : </strong> Building scalable & performant React WEb-APP with SSR .</li>
        <li className="card-get_list__item"><strong>JavaScript :</strong> client-side logic to enhance website functionality</li>
        <li className="card-get_list__item"><strong>HTML5, CSS3, Bootstrap : </strong> Designing elegant & Responsive design </li>
        <li className="card-get_list__item"><strong>Redux :</strong>Implementing efficient state management.  </li>
       
      </ul>
      <h5 style={{textAlign:'center'}}>Backend Skills</h5>
      <ul className="card-get_list">
      <li className="card-get_list__item"><strong>Node.js :</strong> for server-side development.</li>
      <li className="card-get_list__item"><strong>Express.js :</strong> for building scalable and efficient APIs.</li>
      <li className="card-get_list__item"><strong>MongoDB & MySQL :</strong> for database management.</li>
      <li className="card-get_list__item"><strong>RESTful API :</strong> design and implementation.</li>
      </ul>
      <a href={cv} download> <button className="card-main_button">Download CV</button> </a>
      
    </div>
  );
};

export default Card;

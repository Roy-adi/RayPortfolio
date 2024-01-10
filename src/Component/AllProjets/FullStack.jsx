// FullStack.jsx

import React, { useState, useRef } from 'react';

import fsimg1 from '../../image/fs1.png';
import fsimg2 from '../../image/fs2.png';
import './AllProjects.css';


const FullStack = () => {
 
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-6'>
          {/* First card-box */}
          <div className="card-box">
            <div className='image-wrap'>
              <img src={fsimg1} alt="example card" />
              <figcaption className="price">
              <a target='_blank' href='https://youtu.be/pgwtio3ixVk?si=NXfcA_B0R8S7UFWV'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">BlogHub A Full-Stack Blog Application</h2>
              <div className="text-box">
              <p> Welcome to BlogHub, where the art of blogging meets the ease of user-friendly functionality! BlogHub is a dynamic web application designed to empower users with a seamless and captivating blogging experience. With a sophisticated blend of cutting-edge technologies, we've crafted a platform that redefines the way you share and engage with captivating content.
              <br/>
              <strong>Key Features: </strong> 
              <ul className='blog-ul'>
              <li>
              <h4> User Authentication: </h4> 
              Multiple user sign-up and login capabilities, ensuring a personalized experience for every user.
              Secure authentication protocols guarantee user data integrity.
              </li>

               <li>
               <h4>Content Management:</h4>
               Full CRUD (Create, Read, Update, Delete) operations for a comprehensive blogging experience.
               Users can effortlessly create, edit, and delete their blogs, fostering a sense of ownership and control.
               </li>

               <li>
               <h4>Categorization and Subcategories:</h4>
              Blogs are intelligently organized into various categories and subcategories, making navigation a breeze.
              Dive into specific interests with subcategories, ensuring users find the content they love effortlessly.
               </li>
              
               <li>
               <h4>Categorization and Subcategories:</h4>
               Authenticated users can enrich their blogs by seamlessly uploading and editing images.
               A user-friendly image editing feature allows for personalization and creativity.
               </li>

               <li>
               <h4>Responsive Design:</h4>
              BlogHub boasts a fully responsive design, ensuring a flawless experience across devices of all sizes.
              The attractive UI is crafted with ReactJS 18, Bootstrap, Redux Toolkit, and Ant UI for a visually stunning and intuitive interface.
               </li>

               <li>
               <h4>Search Functionality:</h4>
              A powerful search functionality enables users to quickly find blogs of interest.
              Instantly locate content with our efficient and user-friendly search feature.
               </li>

               <li>
               <h4>Backed by Strapi Headless CMS:</h4>
              Leveraging the robust Strapi headless CMS, BlogHub ensures efficient content management and seamless backend operations.
              The SQLite database ensures data reliability and accessibility.
               </li>

               <strong>Technology Stack:</strong>
               <h4>Front-end:</h4> 
               <li>
               ReactJS 18
               </li>
               <li>Bootstrap</li>
               <li>Redux Toolkit</li>
               <li>Ant UI</li>

               <h4>Back-end:</h4> 
               <li>Strapi Headless CMS </li>
               <li> SQLite database</li>
              </ul>
              <strong>Join the Blogging Revolution:</strong>
              BlogHub is not just a platform; it's a community where creativity knows no bounds. Join us in redefining the art of expression and engagement. Whether you're a seasoned blogger or just starting, BlogHub welcomes you to a world where your words and ideas take center stage.
              
              Embark on your blogging journey with BlogHub – Where Every Word Matters! </p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          {/* Second card-box */}
          <div className="card-box">
            <div className='image-wrap'>
              <img src={fsimg2} alt="example card" />
              <figcaption className="price">
              <a target='_blank' href='https://youtu.be/2SersJvaJjg?si=WgmD0Z2rkbgjuxcu'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
              </figcaption>
            </div>
            <div className="content-box">
              <h2 className="title">Full-Stack E-commerce website</h2>
              <div className="text-box">
              <p> Welcome to our cutting-edge E-commerce web application designed exclusively for electronics enthusiasts! This dynamic platform is built to provide users with a seamless and enjoyable shopping experience for the latest and greatest electronic gadgets.
              <br/>
              <strong>Key Features: </strong> 
              <ul className='blog-ul'>
              <li>
              <h4> User Authentication: </h4> 
              Create a personalized account to manage orders, track shipments, and save favorite products.
              Secure login and authentication process to ensure a safe and private user experience.
              </li>

               <li>
               <h4>Product Search and Filtering:</h4>
               Effortlessly find the electronics you desire with a robust search functionality.
               Filter products by company name to explore offerings from your favorite brands.
               Set your budget and narrow down choices by filtering products within a specified price range.
               </li>

               <li>
               <h4>Redux Toolkit Integration:</h4>
               Leverage the power of Redux Toolkit for efficient state management, ensuring a smooth and responsive application.
               Benefit from a centralized store to manage user data, product information, and the shopping cart.
               </li>
              
               <li>
               <h4>Strapi API Integration:</h4>
               Backend powered by Strapi, a versatile headless CMS, ensuring a scalable and customizable foundation for your E-commerce platform.
               Seamless integration with Strapi APIs to fetch and update product information, user data, and cart details.
               </li>

               <li>
               <h4>Responsive Design:</h4>
               Developed using React 18 and Bootstrap, our web app boasts a sleek and user-friendly interface.
               Enjoy a seamless browsing experience on any device, ensuring accessibility for all users.
               </li>

               <li>
               <h4>Shopping Cart Functionality:</h4>
               Easily add products to your cart with a single click, and manage your selections before proceeding to checkout.
               Intuitive cart interface for a hassle-free shopping experience.
               </li>

               <li>
               <h4>Backed by Strapi Headless CMS:</h4>
              Leveraging the robust Strapi headless CMS, ensures efficient content management and seamless backend operations.
              The SQLite database ensures data reliability and accessibility.
               </li>

               <strong>Technology Stack:</strong>
               <h4>Front-end:</h4> 
               <li>
               ReactJS 18
               </li>
               <li>Bootstrap</li>
               <li>Redux Toolkit</li>
               <li>Ant UI</li>

               <h4>Back-end:</h4> 
               <li>Strapi Headless CMS </li>
               <li> SQLite database</li>
              </ul>
              Embark on a journey through the world of electronics with our E-commerce web app. Dive into a rich collection of gadgets, enhance your shopping experience, and stay ahead with the latest in technology. Happy shopping! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;

import React from 'react'
import  s2 from '../../image/s2.png'
import  s1 from '../../image/s1.png'
import  s3 from '../../image/s3.png'
import  s4 from '../../image/s4.png'
import './AllProjects.css'
const SmallProjects = () => {
  return (
    <div className='container'>
      <div className='row mt-5'> 
      <div className='col-md-6'> 
      <div className="card-box">
      <div className='image-wrap'>
        <img src= {s2} alt="example card" />
        <figcaption className="price">
        <a href='https://currency-c45.pages.dev/' target='_blank'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
        </figcaption>
      </div>
      <div className="content-box">
        <h2 className="title">Real-Time Currency Converter Web App with React 18 </h2>
        <div className="text-box">
          <p>
          Welcome to the Real-Time Currency Converter Web App, a cutting-edge financial tool built with React 18 and powered by real-time currency data from Rapid API. This web application provides users with a seamless and intuitive platform to convert currencies instantly, keeping them informed about the latest exchange rates.
          <br/>
         
         <strong>Technology Stack: </strong>
           ReactJS with Rapid Api Integration
          </p>
          
        </div>
      </div>
    </div>
    
      </div>


      <div className='col-md-6'> 
      <div className="card-box">
      <div className='image-wrap'>
        <img src= {s1} alt="example card" />
        <figcaption className="price">
        <a href='https://currency-c45.pages.dev/' target='_blank'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
        </figcaption>
      </div>
      <div className="content-box">
        <h2 className="title">Real-Time Weather Web App in React 18 </h2>
        <div className="text-box">
          <p>
          Introducing the React 18 Weather App, a sleek and efficient application designed to provide users with instant weather updates from openweathermap.org. This web app brings you real-time weather information in a user-friendly interface, helping you stay informed about current conditions, forecasts, and more.
          <br/>
         
         <strong>Technology Stack: </strong>
           ReactJS with Api Integration openweathermap.org securely
          </p>
          
        </div>
      </div>
    </div>
    
      </div>


      <div className='col-md-6'> 
      <div className="card-box">
      <div className='image-wrap'>
        <img src= {s3} alt="example card" />
        <figcaption className="price">
        <a href='https://todo-23z.pages.dev/' target='_blank'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
        </figcaption>
      </div>
      <div className="content-box">
        <h2 className="title">React 18 Todo List: Effortless Task Management with CRUD Functionality</h2>
        <div className="text-box">
          <p>
          Welcome to the React 18 Todo List, a powerful task management application that empowers users to organize their daily activities seamlessly. This feature-rich web app, built with React 18, incorporates full CRUD (Create, Read, Update, Delete) functionality, providing users with a flexible and efficient way to manage their tasks. 
          <br/>
          Real-Time Updates: Keep your task list up-to-date with real-time updates. Changes made by one user are instantly reflected for others, making collaboration and shared task management a breeze.
          <br/>
         <strong>Technology Stack: </strong>
           ReactJS with Api Integration openweathermap.org securely
          </p>
          
        </div>
      </div>
    </div>
    
      </div>


      <div className='col-md-6'> 
      <div className="card-box">
      <div className='image-wrap'>
        <img src= {s4} alt="example card" />
        <figcaption className="price">
        <a href='https://findimage.pages.dev/' target='_blank'><button class="custom-btn btn-12"><span>Click</span><span>Demo</span></button></a>
        </figcaption>
      </div>
      <div className="content-box">
        <h2 className="title">React 18 Image Finder: Explore a World of Visuals with Pixabay API Integration</h2>
        <div className="text-box">
          <p>
          import  s3 from '../../image/s3.png'
          <br/>
          <strong>Pixabay API Integration:</strong> The heart of the React 18 Image Finder is its integration with the Pixabay API. This allows users to explore a diverse range of images, from stunning landscapes to creative illustrations, all sourced from a vast and constantly updated database.
          <br/>
          <strong>Responsive and Intuitive Design:</strong> The app features a responsive and intuitive design, ensuring a seamless experience across devices. Whether you're on a desktop, tablet, or mobile phone, the React 18 Image Finder adapts to your screen size for optimal image browsing.
          <br/>
          <strong>Effortless Image Search:</strong> Users can easily search for any image by entering keywords, ensuring a quick and precise image discovery process. The app provides instant results, allowing users to explore and choose the perfect visuals for their needs.
          <br/>
         <strong>Technology Stack: </strong>
           ReactJS with Api Integration Pixabay securely
          </p>
          
        </div>
      </div>
    </div>
    
      </div>
      </div>
    </div>
  )
}

export default SmallProjects

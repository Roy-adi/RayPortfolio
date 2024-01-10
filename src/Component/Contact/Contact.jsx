import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'
const Contact = () => {
  return (

    <div className='container contact-wrap'> 
     <div className='row'>
     <div className='col-md-12'> 
      <div className='contact-right'> <ContactForm/> </div>
     </div>
     </div>
    </div>
    
  )
}

export default Contact
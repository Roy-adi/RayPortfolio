import React from 'react'
import Text from './Text'
import { Container} from 'react-bootstrap';
import Card from './Card';
import './Service.css'
const Service = () => {
  return (
     
    <div className='service-container'>
    <p className='skill-title'>Skills</p>
    <Container>
    <div className='row align-items-center'>
    <div className='col-md-6'>
     <Card/>
    </div>
    <div className='col-md-6'>
     <div className='rightside'>
      <Text/>
     </div>
    </div>
    </div>
    </Container>
    </div>
    
 

  )
}

export default Service
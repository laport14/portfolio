import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import './Greenhouse.css'
import GreenHouse from '../../Assets/greenhouse.gif'

function Greenhouse(props) {
  return (
    <Layout>
      <div className='content-container'>
        <h2 className='project-title'>Tablet View</h2>
        <img className='project-image' src={GreenHouse} />
        <h2 className='project-description-title'>Project Description</h2>
        <p className='project-description'>Project Description with some text should go in this location</p>
        <h2>Built With</h2>
        <p className='tech-stack-fe'>Front End - React, CSS & Styled Components</p>
        <p className='tech-stack-be'>Back End - Express, MongoDB & Mongoose</p>
        
        
      
      </div>
    </Layout>
  );
}

export default Greenhouse;
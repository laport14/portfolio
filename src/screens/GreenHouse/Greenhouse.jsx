import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import './Greenhouse.css'
import GreenHouse from '../../Assets/greenhouse.png'

function Greenhouse(props) {
  return (
    <Layout>
      <div className='content-container'>
        <h2>Tablet View</h2>
        <img className='project-image' src={GreenHouse} />
        
        
      
      </div>
    </Layout>
  );
}

export default Greenhouse;
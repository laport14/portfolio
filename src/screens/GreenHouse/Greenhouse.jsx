import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import './Greenhouse.css'
import GreenHouse from '../../Assets/greenhouse.gif'
import github from '../../Assets/github.png'
import www from '../../Assets/www.png'

function Greenhouse(props) {
  return (
    <Layout>
      <div className='project-container'>
        <div className='project-view-container'>
          <h2 className='project-title'>Tablet View</h2>
          <img className='project-image' src={GreenHouse} />
        </div>
        <div className='project-description-container'>
          <h2 className='project-description-title'>Project Description</h2>
            <p className='project-description'>Project Description with some text should go in this location</p>
          <h2>Built With</h2>
            <p className='tech-stack-fe'>Front End - React, CSS & Styled Components</p>
            <p className='tech-stack-be'>Back End - Express, MongoDB & Mongoose</p>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://github.com/suttondemlong/green-house'>See Code <img className='project-img' src={github} /></a>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://green-house-adirondack-phoenix.netlify.app/'>Website <img className='project-img' src={www}/></a>
        </div>
      </div>
    </Layout>
  );
}

export default Greenhouse;
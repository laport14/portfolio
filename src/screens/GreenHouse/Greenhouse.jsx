import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import './Greenhouse.css'
import GreenHouse from '../../Assets/greenhouse.gif'
import github from '../../Assets/github.png'
import www from '../../Assets/www.png'
import { Link } from 'react-router-dom';

function Greenhouse(props) {
  return (
    <Layout>
      <div className='project-container'>
        <div className='project-view-container'>
          <Link className='next-button' to='/bucketlist'>Next Project</Link>
          <h2 className='project-title'>Tablet View</h2>
          <img className='project-image' src={GreenHouse} alt='greenhouse' />
        </div>
        <div className='project-description-container'>
          <h2 className='project-description-title'>Project Description</h2>
          <p className='project-description'>GreenHouse is an app built with the intention of users being able to track their energy savings based on the equipment they have purchased for their house.
          For the first iteration, myself and a team of other developers built out the landing page with full CRUD capabilities around the "articles" feature. The second iteration of the project
          included adding a library of equipment and incorporated the dashboard concept. We also built full CRUD around a user and utilized local storage and useContext to access/store user information.</p>
          <h2>Built With</h2>
            <p className='tech-stack-fe'>Front End - React, CSS & Styled Components</p>
            <p className='tech-stack-be'>Back End - Express, MongoDB & Mongoose</p>
          <a className='project-link' rel='noreferrer' target='_blank' href='https://github.com/suttondemlong/green-house'>See Code <img className='project-img' src={github} alt='github' /></a>
          <a className='project-link' rel='noreferrer' target='_blank' href='https://green-house-adirondack-phoenix.netlify.app/'>Website <img className='project-img' src={www} alt='site'/></a>
        </div>
      </div>
    </Layout>
  );
}

export default Greenhouse;
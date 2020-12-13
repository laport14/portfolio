import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import fittech from '../../Assets/fittech.gif'
import github from '../../Assets/github.png'
import www from '../../Assets/www.png'

function Fittech(props) {
  return (
    <Layout>
      <div className='project-container'>
        <div className='project-view-container'>
          <h2 className='project-title'>Tablet View</h2>
          <img className='project-image' src={fittech} alt='fittech' />
        </div>
        <div className='project-description-container'>
        <h2 className='project-description-title'>Project Description</h2>
          <p className='project-description'>Fit-Tech is a React application built with an Airtable RESTful api. This application allows users to track and post their workouts based on category: Run, Bike, Lift, and Yoga.
        Users also have the capability of deleting their posts if need be. The application is a simple solution for keeping all of your workout data in one place.</p>
        <h2>Built With</h2>
        <p className='tech-stack-fe'>Front End - React, CSS & Styled Components</p>
          <p className='tech-stack-be'>Back End - Airtable RESTful API</p>
          <a className='project-link' rel='noreferrer' target='_blank' href='https://github.com/laport14/fit-tech'>See Code <img className='project-img' src={github} alt='github' /></a>
          <a className='project-link' rel='noreferrer' target='_blank' href='https://fit-tech.netlify.app'>Website <img className='project-img' src={www} alt='site'/></a>
        </div>
      </div>
    </Layout>
  );
}

export default Fittech;
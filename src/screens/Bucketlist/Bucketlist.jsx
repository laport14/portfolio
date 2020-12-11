import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import bucketlist from '../../Assets/bucketlist.gif'
import github from '../../Assets/github.png'
import www from '../../Assets/www.png'

function Bucketlist(props) {
  return (
    <Layout>
      <div className='project-container'>
        <div className='project-view-container'>
          <h2 className='project-title'>Tablet View</h2>
          <img className='project-image' src={bucketlist} />
        </div>
        <div className='project-description-container'>
        <h2 className='project-description-title'>Project Description</h2>
        <p className='project-description'>Project Description with some text should go in this location</p>
        <h2>Built With</h2>
        <p className='tech-stack-fe'>Front End - React, CSS & Styled Components</p>
          <p className='tech-stack-be'>Back End - Ruby on Rails, Postgresql & JWT Token for Authorization</p>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://github.com/laport14/Bucket-List'>See Code <img className='project-img' src={github} /></a>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://the-only-bucket-list.netlify.app/'>Website <img className='project-img' src={www}/></a>
        </div>
      </div>
    </Layout>
  );
}

export default Bucketlist;
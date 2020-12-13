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
          <p className='project-description'>Everyone talks about their bucket list items but who really has taken the time to write them down..
          Bucket-List is a web application that allows users to do just that. Users are encouraged to share their bucket-list ideas with their family and friends who can comment on
        the user's bucket list activity. Users should also feel safe knowing that their is login information is secure as there is backend authentication in this application.</p>
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
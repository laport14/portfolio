import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import {Link} from 'react-router-dom'
import './Home.css'

function Home(props) {
  return (
    <Layout>
      <div>
        <div className='content-container'>
          <div className='hero-container border-gradient border-gradient-pink'>
            <h1 className='hero-text-header'>Geoff LaPorte</h1>
            <h2 className='job-title'>Software Engineer</h2>
            <div className='about-links'>
              <a className='about-text' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/laportegeoffrey/'>LinkedIn</a>
              <a className='about-text' rel='noreferrer' target='_blank' href='https://github.com/laport14'>Github</a>
            </div>
            <Link to='/projects' style={{width: '200px', margin: '0 auto'}}>
            <button className='project-button'>Projects</button>
            </Link>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
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
            <h2 className='job-title'>Junior Software Engineer</h2>
            <p className='about-text'>Some lorem ipsem here</p>
            <Link to='/projects'>
            <button className='project-button'>Projects</button>
            </Link>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
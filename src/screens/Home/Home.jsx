import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
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
            <button className='project-button'>Projects</button>
            </div>
        </div>
      
    </div>
    </Layout>
  );
}

export default Home;
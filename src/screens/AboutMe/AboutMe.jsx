import React from 'react';
import './AboutMe.css'
import Layout from '../../components/shared/Layout/Layout';
import headshot from '../../Assets/headshot.png'
import chrome from '../../Assets/chrome.png'

function AboutMe(props) {
  return (
    <Layout>
      <div className='about-container'>
        <img className='about-image' src={headshot} alt='headshot' />
        <div className='aboutme-div'>
          <h2 className='about-title'>About me</h2>
          <p className='about-description'>
            Software Developer pivoting from management consulting and project management to pursue my passion for technology.
            Has experience driving results and optimizing business delivery goals utilizing technology to create efficiencies.
            Track record of client handling at director level and down for Fortune 500 companies.
            Proven professional experience in delivering the highest quality product to customers and collaborating with dev/project teams through project sprints in order to achieve deliverables.
            Prideful of individual work product and work ethic and am eager to take on new challenges.</p>
            <h2 className='about-title'>Languages & Frameworks</h2>
          <p className='about-description'>
            HTML, CSS, JavaScript, React, Node.js, Ruby, Ruby on Rails, Postgresql, Express, MongoDB, & Mongoose.  
            </p>
          <a className='project-link' rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1oaPG2t11-kwLAQS9JX-1nMoUQr6i5NwB/view?usp=sharing'>Resume <img className='project-img' src={chrome} alt='chrome' /></a>
        </div>
      </div>

    </Layout>
  );
}

export default AboutMe;
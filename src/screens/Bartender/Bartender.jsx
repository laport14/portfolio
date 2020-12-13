import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import bartender from '../../Assets/bartender.gif'
import github from '../../Assets/github.png'
import www from '../../Assets/www.png'

function Bartender(props) {
  return (
    <Layout>
      <div className='project-container'>
        <div className='project-view-container'>
          <h2 className='project-title'>Tablet View</h2>
          <img className='project-image' src={bartender} />
        </div>
        <div className='project-description-container'>
        <h2 className='project-description-title'>Project Description</h2>
          <p className='project-description'>One of the most difficult undertakings of being an adult is having to figure out what to have for dinner every night.
          A sure way to spice up your dinners is to have a refreshing cocktail to go with it. If/when you get an itch to make a tasty cocktail, Bar-Tender is the application for you. This application has over +100 different cocktail recipes!
        The best part being you can select cocktails based off of liquor preference. Cheers!</p>
        <h2>Built With</h2>
        <p className='tech-stack-fe'>Front End - HTML, CSS & JavaScript</p>
          <p className='tech-stack-be'>CocktailDB RESTful API</p>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://github.com/laport14/Bar-Tender'>See Code <img className='project-img' src={github} /></a>
          <a className='project-link' rel='nonreferrer' target='_blank' href='https://laport14.github.io/Bar-Tender/'>Website <img className='project-img' src={www}/></a>
        </div>
      </div>
    </Layout>
  );
}

export default Bartender;
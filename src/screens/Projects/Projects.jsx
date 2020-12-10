import React from 'react';
import './Projects.css'
import Layout from '../../components/shared/Layout/Layout';
import Greenhouse from '../../Assets/greenhouse.png'
import Bucketlist from '../../Assets/bucketlist.png'
import Fittech from '../../Assets/fittech.png'
import Bartender from '../../Assets/bartender.png'

function Projects(props) {
  return (
    <Layout>
      <div className='projects-container'>
        <div className='image-container'>
          <img className='greenhouse image' src={Greenhouse}  />
          <div className="overlay">
          <div className="image-text">GreenHouse</div>
          </div>
        </div>
        <div className='image-container'>
          <img className='bucketlist image' src={Bucketlist} />
            <div className='overlay'>
              <div className='image-text'>Bucket-List</div>
            </div>
        </div>
        <div className='image-container'>
          <img className='fittech image' src={Fittech} />
            <div className='overlay'>
              <div className='image-text'>Fit-Tech</div>
          </div>
        </div>
        <div className='image-container'>
          <img className='fittech image' src={Bartender} />
            <div className='overlay'>
              <div className='image-text'>Bar-Tender</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
import React from 'react';
import {Link} from 'react-router-dom'
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
      <Link to='/greenhouse'>
          <img className='greenhouse image' src={Greenhouse} />
            <div className="overlay">
              <div className="image-text">GreenHouse</div>
            </div>
      </Link>
          </div>
          <div className='image-container'>
        <Link to='/bucketlist'>
            <img className='bucketlist image' src={Bucketlist} />
             <div className='overlay'>
                <div className='image-text'>Bucket-List</div>
              </div>
        </Link>
          </div>
          <div className='image-container'>
        <Link to='/fittech'>
            <img className='fittech image' src={Fittech} />
              <div className='overlay'>
                <div className='image-text'>Fit-Tech</div>
            </div>
        </Link>
          </div>
          <div className='image-container'>
        <Link to='/bartender'>
            <img className='bartender image' src={Bartender} />
              <div className='overlay'>
                <div className='image-text'>Bar-Tender</div>
              </div>
          </Link>
          </div>
      </div>
    </Layout>
  );
}

export default Projects;
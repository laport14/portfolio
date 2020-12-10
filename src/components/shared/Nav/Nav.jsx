import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import Logo from '../../../Assets/Logo.jpeg'

function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-contents">
        <div>
        <Link to='/' style={{textDecoration: 'none', color: '#000000'}}>
          <h1 className='nav-logo'>GL</h1>
        </Link>
        </div>
          <div className='nav-links'>
            <h3 className='header-link-home'>Home</h3>
            <h3 className='header-link-about'>About</h3>
            <h3 className='header-link-work'>Work</h3>
            <h3 className='header-link-contact'>Contact</h3>
          </div>
      </div>
    </div>
  );
}

export default Nav;
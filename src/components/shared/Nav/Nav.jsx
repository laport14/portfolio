import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

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
          <Link to='/' style={{textDecoration: 'none'}}>
            <h3 className='header-link-home'>Home</h3>
          </Link>
          <Link to='/aboutme' style={{textDecoration: 'none'}}>
            <h3 className='header-link-about'>About</h3>
          </Link>
          <Link to='/projects' style={{textDecoration: 'none'}}>
            <h3 className='header-link-work'>Work</h3>
          </Link>
          <Link to='/contact' style={{textDecoration: 'none'}}>
            <h3 className='header-link-contact'>Contact</h3>
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Nav;
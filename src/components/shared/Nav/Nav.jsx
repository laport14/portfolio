import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import Logo from '../../../Assets/Logo.jpeg'

function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-contents">
        <div>
        <Link to='/'>
          <img className="nav-logo" src={Logo} alt="Geoff Logo"/>
        </Link>
        </div>
          <div className='nav-links'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
          </div>
      </div>
    </div>
  );
}

export default Nav;
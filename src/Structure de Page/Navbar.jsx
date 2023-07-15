import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


function Navbar() {
  return (
  
    <nav className='navbar'>
      <div className='logo-navbar'>
        <img src="logo.png" alt="logo" />
      </div>
      <Link>
         <div> Accueil </div>
      </Link>
      <Link to="/about">
         <div>A Propos</div>
      </Link>
    </nav>
    
  );
  }

export default Navbar


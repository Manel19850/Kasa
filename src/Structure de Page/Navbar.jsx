import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from "../Images/Logo.PNG"


function Navbar() {
  return (
  
    <nav className='navbar'>
      <div className='logo-navbar'>
        <img src={logo} alt="logo" />
      </div>
      <NavLink to="/">
         <div> Accueil </div>
      </NavLink>
      <NavLink to="/about">
         <div>A Propos</div>
      </NavLink>
    </nav>
    
  );
  }

export default Navbar


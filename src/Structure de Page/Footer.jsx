import React from 'react';
import './Footer.scss'
import Logo from '../Images/LogoBlack.PNG'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-log'>
            <img src= {Logo} alt='Logo'></img>
         </div>
         <div className='footer-texte'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
    
  );
}

export default Footer;
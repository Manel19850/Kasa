import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-log'>
            <img src='LogoBlack.png'alt='Logo'></img>
         </div>
         <div className='footer-texte'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
    
  );
}

export default Footer;
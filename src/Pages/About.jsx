import React from 'react';
import './About.scss'
import Apropos from '../Composants/A propos/Apropos';
import Footer from '../Structure de Page/Footer';
import Navbar from '../Structure de Page/Navbar';


function About ()
{   return (
    <>
        <Navbar />
        <Apropos/>
        <Footer />
      </>
    
);
}

export default About
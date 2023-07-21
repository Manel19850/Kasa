import React from 'react';
import Banner from '../Structure de Page/Banner';
import CardLogement from '../Composants/CardLogement'
import Footer from '../Structure de Page/Footer';
import Navbar from '../Structure de Page/Navbar';


function Accueil() {
  return (
    <>
    <Navbar />
    <Banner/>
    <CardLogement />
    <Footer />
  </>
    
  );
}

export default Accueil;


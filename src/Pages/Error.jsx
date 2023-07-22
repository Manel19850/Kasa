import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';
import Footer from '../Structure de Page/Footer';
import Navbar from '../Structure de Page/Navbar';

function Error() {
    return (
        <div>
            <Navbar />
            <div className='error'>
                <h1 className="error-message">404</h1>
                <h2 className="error-message-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
                <h3 className='error-retour'>
                    <Link to="/">Retourner à la page d'accueil</Link>
                </h3>
            </div>
            <Footer />
        </div>
    );
}

export default Error;
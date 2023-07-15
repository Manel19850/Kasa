import React from 'react';
import './Error.scss';

function Error() {
    return (
        <div className='error'>
            <h1 className="error-message">404</h1>
            <h2 className="error-message-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <h3 className='error-retour'>Retourner à la page d'accueil</h3>
        </div>
    );
}

export default Error;
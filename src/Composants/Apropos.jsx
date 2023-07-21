import React, { useState } from 'react';
import './Apropos.scss';

function Apropos() {
  const [isFiabiliteVisible, setFiabiliteVisible] = useState(false);
  const [isRespectVisible, setRespectVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isSecuriteVisible, setSecuriteVisible] = useState(false);

  const showContent = (collapse) => {
    switch (collapse) {
      case 'fiabilite':
        setFiabiliteVisible(!isFiabiliteVisible);
        break;
      case 'respect':
        setRespectVisible(!isRespectVisible);
        break;
      case 'service':
        setServiceVisible(!isServiceVisible);
        break;
      case 'securite':
        setSecuriteVisible(!isSecuriteVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div className="page-apropos">
      <div className="banner-apropos">
        <img src="banner.png" alt="montagne" />
      </div>

      <div className="container-apropos">
        <div className="fiabilite" onClick={() => showContent('fiabilite')}>
          <span>Fiabilité</span>
          <span>
            {isFiabiliteVisible ? (
              <span><i className="fa-solid fa-chevron-up"></i></span>
            ) : (
              <span><i className="fa-solid fa-chevron-down"></i></span>
            )}
          </span>
        </div>
        {isFiabiliteVisible && (
          <div className="content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        )}

        <div className="respect" onClick={() => showContent('respect')}>
          Respect
          <span>
            {isRespectVisible ? (
              <span><i className="fa-solid fa-chevron-up"></i></span>
              ) : (
                <span><i className="fa-solid fa-chevron-down"></i></span>
            )}
          </span>
        </div>
        {isRespectVisible && (
          <div className="content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </div>
        )}

        <div className="service" onClick={() => showContent('service')}>
          Service
          <span>
            {isServiceVisible ? (
              <span><i className="fa-solid fa-chevron-up"></i></span>
              ) : (
                <span><i className="fa-solid fa-chevron-down"></i></span>
            )}
          </span>
        </div>
        {isServiceVisible && (
          <div className="content">
            La satisfaction de nos utilisateurs est notre priorité. Notre équipe dévouée est disponible 24/7 pour vous aider à résoudre tout problème ou répondre à toutes vos questions.
          </div>
        )}

        <div className="securite" onClick={() => showContent('securite')}>
          Sécurité
          <span>
            {isSecuriteVisible ? (
             <span><i className="fa-solid fa-chevron-up"></i></span>
             ) : (
               <span><i className="fa-solid fa-chevron-down"></i></span>
            )}
          </span>
        </div>
        {isSecuriteVisible && (
          <div className="content">
            La sécurité est une priorité absolue pour nous. Nous prenons des mesures strictes pour garantir la sécurité de vos informations personnelles et assurer la protection de vos transactions.
          </div>
        )}
      </div>
    </div>
  );
}

export default Apropos;
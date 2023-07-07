import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './Pages/Accueil';
import AppartementsPage from './Pages/AppartementsPage';
import About from './Pages/About';
import { BrowserRouter,Outlet,Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Structure de Page/Footer';
import Navbar from './Structure de Page/Navbar';
import Banner from './Structure de Page/Banner';


const StructurePage=()=>{
return <>
<Navbar/>
<Outlet/>
<Footer/>
</>
}

export const Router = createBrowserRouter([
{ element: <StructurePage/>,
errorElement: (
  <>
  <Navbar/>
    <h1 className="error-message">404</h1>
    <h2 className="error-message-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
    <h3 className='error-retour'> Retourner à la page d'accueil</h3>
    <Footer/>
  </>
),
  children: [

    {path:"/",
    element:<Accueil/>
    },
    {
      path:"/Appartements",
      element: <AppartementsPage/>
    },
    {
      path:"/About",
      element: <About/>
    
    },
    
            ]
}
])
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <RouterProvider router={Router}/>
  </React.StrictMode>
);


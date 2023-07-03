import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './Pages/Accueil';
import AppartementsPage from './Pages/AppartementsPage';
import About from './Pages/About';
import { BrowserRouter,Outlet,Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Structure de Page/Footer';
import Navbar from './Structure de Page/Navbar';


const StructurePage=()=>{
return <>
<Navbar/>
<Outlet/>
<Footer/>
</>
}

export const Router = createBrowserRouter([
{ element: <StructurePage/>,
errorElement:<h1>404 Oups! La page que vous demandez n'existe pas.</h1>,

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
    <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap'></link>
   <RouterProvider router={Router}/>
  </React.StrictMode>
);


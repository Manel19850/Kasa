import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './Pages/Accueil';
import AppartementsPage from './Pages/AppartementsPage';
import About from './Pages/About';
import {Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Structure de Page/Footer';
import Navbar from './Structure de Page/Navbar';
import Error from './Pages/Error';


const StructurePage=()=>{
return <>
<Navbar/>
<Outlet/>
<Footer/>
</>
}

export const Router = createBrowserRouter([
{ element: <StructurePage/>,
errorElement: (<>
                  <Navbar/>
                  <Error/>
                  <Footer/>
              </>),

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


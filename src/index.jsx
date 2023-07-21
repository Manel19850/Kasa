import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import AppartementsPage from './Pages/AppartementsPage';
import Error from './Pages/Error';




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Appartements/:id' element={<AppartementsPage />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router/>
  </React.StrictMode>
);
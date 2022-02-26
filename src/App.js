import React, { useState } from 'react';
import './App.css';
import CardDetail from './componentes/CardDetail/CardDetail';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './componentes/Home/Home';



function App() {

  return (
    
    <div className="App">
     
      <BrowserRouter >
      <NavBar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/:category' element={<CardDetail/>}/>
          <Route path="/:category/:name" element={<CardDetail/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
 
  );
}

export default App;

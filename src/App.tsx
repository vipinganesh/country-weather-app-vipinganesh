import React from 'react';
import { useState } from 'react';
import {Routes,Route, Link, Router} from "react-router-dom";
import './App.css'; 
import InputForm from './components/InputForm';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className='App'>
  
      <h1 className='header' >Country-Weather-Application</h1>  
      <div className="appPages">
        <Routes>
        <Route path="/" element={<InputForm/>}/>
        <Route path="/CountryDetails" element={<CountryDetails/>}/>
        </Routes>
     </div>
     </div>
   
  );
}

export default App;
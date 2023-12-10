import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LoginComponent from './login';
import CardDetailsComponent from './card.component';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginComponent/>}/>
      <Route path='/card' element={<CardDetailsComponent/>}/>
    </Routes>
    </>
  );
}

export default App;

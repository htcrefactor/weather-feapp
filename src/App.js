import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from "./RouterApp";
import Header from './components/Header'
import './App.css';

function App() {
  const cityName = "Seoul";
  return (
    <BrowserRouter>
      <RouterApp />
    <div className="App">
      <Header cityName={cityName}/>
      <p>Hello World!</p>
    </div>
    </BrowserRouter>
  );
}

export default App;
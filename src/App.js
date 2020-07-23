import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import './App.css';

function App() {
  const cityName = "Seoul";
  return (
    <BrowserRouter>
    <div className="App">
      <Header cityName={cityName}/>
      <p>Hello World!</p>
    </div>
    </BrowserRouter>
  );
}

export default App;
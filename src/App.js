import React from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  const cityName = "Seoul";
  return (
    <div className="App">
      <Header cityName={cityName}/>
      <p>Hello World!</p>
    </div>
  );
}

export default App;

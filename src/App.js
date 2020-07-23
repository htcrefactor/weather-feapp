import React from 'react';
import logo from './logo.svg';

import { sum, multiple } from "./Math";
// import Math from "./Math";

import './App.css';

function App() {
  // console.log(Math);
  console.log(sum);
  console.log(multiple);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

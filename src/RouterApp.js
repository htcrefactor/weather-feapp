import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
const RouterApp = () => {
  const cityName = "Seoul";
  return (
    <div>
      <Header cityName={cityName} />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
export default RouterApp;
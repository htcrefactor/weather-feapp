/*
import React, { Component } from "react";
// Stateless component
const Weather = (props) => {
  const { cityName } = props.match.params;
  console.log(cityName);
  return (
    <div>
      <h1>Weather : {cityName}</h1>
    </div>
  );
};

export default Weather;
*/

import React from "react";

class WeatherDetails extends React.Component {
  state = {
    cityName: "", 
    weatherMain: "", 
    weatherDetails: "",
    temp: ""
  };

  compoenentDidMount() {

  }

  render() {
    return (
      <div>This is WeatherDetails.</div>
    );
  }
}

export default WeatherDetails;
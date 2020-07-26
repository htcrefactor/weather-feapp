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

import React, { Component } from "react";

class WeatherDetails extends React.Component {
  state = {
    cityName: "", 
    weatherMain: "", 
    weatherDetails: "",
    temp: ""
  };

  compoenentDidMount() {
    console.log("Component Loaded");
    const { weatherDetails } = this.state;
    const { cityName } = this.props.match.params;

    this.setState({
      city: cityName
    })

    /*
    const API_FETCH_URI = "http://localhost:8080/weather-crawler/current-weathers/by-city-name/";
    console.log("Anyone there?");
    const WeatherData = fetch(API_FETCH_URI + cityName)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherMain: data.weather[0].main,
          weatherDetails: data.weather[0].description,
          temp: data.main.temp
        });
      })

      .catch((err) => console.warn("Something weird just happened :: ", err));

    this.setState({
      cityName: cityName
    })
    */
  }

  render() {
    const { weatherDetails } = this.state;
    const { cityName } = this.props.match.params;
    const API_FETCH_URI = "http://localhost:8080/weather-crawler/current-weathers/by-city-name/";
    console.log("Anyone there?");
    const WeatherData = fetch(API_FETCH_URI + cityName)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherMain: data.weather[0].main,
          weatherDetails: data.weather[0].description,
          temp: data.main.temp
        });
      })

      .catch((err) => console.warn("Something weird just happened :: ", err));

    
    // const {cityName} = this.state;
    const {weatherMain} = this.state;
    // const {weatherDetails} = this.state;
    const {temp} = this.state;
    const tempConverted = (temp - 273.15).toFixed(1);

    if (weatherMain == "") {
      return (
        <div>
          <h2>City: {cityName}</h2>
          <p>Something weird just happened...</p>
        </div>
      )
    }

    else {
      return (
        <div>
          <h2>City: {cityName}</h2>
          <p>Weather: {weatherMain}</p>
          <p>Details: {weatherDetails}</p>
          <p>Temperature: {tempConverted}℃</p>
        </div>
      )
    }
  }
}

export default WeatherDetails;
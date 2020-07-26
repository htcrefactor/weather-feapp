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
import React, { Component } from "react";
// Stateless component
const Weather = (props) => {
  
  // 방법1.
  // class 형태로 변경 후 fetch 선택 도시의 날씨
  const API_FETCH_DETAILS = "http://localhost:8080/weather-crawler/current-weathers/by-city-name/";

  class WeatherDetails extends React.Component {
    state = {
       cityName: "",
       weatherMain: "",
       weatherDescription: "",
       temp: ""
    };

    componentDidMount() {
      console.log("Weather Details");

      const weatherDetailData = fetch(API_FETCH_DETAILS + props.match.params)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherinfo: data,
        });
      });

      console.log("weatherDetailData: ", weatherDetailData);
      console.log("cityName: ", cityName);
      console.log("API URI: ", API_FETCH_DETAILS + props.match.params);

    }
  }


  // 방법2. (이 방법으로 하면 가산점)
  // react Hook << 검색
  // state, setState

  // + Use Github Pages to host this site.

  const { cityName } = props.match.params;
  console.log(cityName);
  return (
    <div>
      <h1>Weather : {cityName}</h1>
      <p>Here is front page!</p>
    </div>
  );
};

export default Weather;
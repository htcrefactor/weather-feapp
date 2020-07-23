import React from 'react';

const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities/';

class Cities extends React.Component {
    // componentDidMount() runs when Cities has been mounted.
    componentDidMount() {
    console.log("City component");

    const cities = fetch(API_CITIES)
        .then((res) => res.json())
        .then((data) => console.log(data));
    console.log(cities);
  }

  render() {
    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>
      </div>
    );
  }
}
export default Cities;
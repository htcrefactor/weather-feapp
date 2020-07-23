import React from 'react';

const API_CITIES = 'http://localhost:8888/weather-crawler/available-cities';

class Cities extends React.Component {
    // componentDidMount() runs when Cities has been mounted.
    componentDidMount() {
    console.log(API_CITIES);
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
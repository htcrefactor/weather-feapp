import React from 'react';

const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities/';

class Cities extends React.Component {
    state = {
        cities: []
    }

    // componentDidMount() runs when Cities has been mounted.
    componentDidMount() {
        console.log("City component");

        console.log(this.state.cities);

        const { cities } = this.state;
        console.log(cities);

        const citiesData = fetch(API_CITIES)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    cities: data,
                });
            });

        console.log(cities);
    }

    render() {
        const { cities } = this.state;
        return (
            <div>
                <h1>Cities</h1>
                <p>City list</p>
                <div>{cities.join(" ")}</div>
            </div>
        );
    }
}
export default Cities;
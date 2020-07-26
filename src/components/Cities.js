import React from "react";
import { Switch, Route, withRouter } from "react-router";
import CityList from "./CityList";
import WeatherDetails from "./Weather/WeatherDetails";

const API_CITIES = "http://localhost:8080/weather-crawler/available-cities";

class Cities extends React.Component {
  state = {
    cities: [],
  };
  componentDidMount() {
    console.log("City component");
    // console.log(this.state.cities);
    const { cities } = this.state;
    // console.log(cities);
    const citiesData = fetch(API_CITIES)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cities: data,
        });
      });
  }
  render() {
    const { match } = this.props;
    const { cities } = this.state;
    return (
      <div>
        <h1>Cities</h1>
        <Switch>
          <Route exact path={match.path} render={() => <CityList cities={cities} />} />
          <Route path={`${match.path}/:cityName`} component={WeatherDetails} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Cities)
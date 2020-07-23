import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = props => {
    const { cities, match } = props;
    const { url } = match;

    console.log(match, url);

    return (
        <ul>
            { cities.map((item) => {
                console.log(item);

                return (
                    <li key = {item}>
                        <Link to = {""}>{item}</Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default withRouter(CityList);
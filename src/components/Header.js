import logo from '../logo.svg';
import React from 'react';

// ES5 function
/*
function Header( props ) {
    console.log( props );
    console.log ( props.cityName );

    const cityName = props.cityName;

    return (
        < header className="App-header" >
            <div>{cityName}</div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header >
    );
}
*/

// ES6 arrow function
const Header = ( { cityName } ) => {
    // console.log( props );
    // console.log ( props.cityName );

    // Parameter props will be in this form
    // props = { cityName: 'Seoul' };
    // const { cityName } = props;

    return (
        < header className="App-header" >
            <div>{cityName}</div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header >
    );
}

export default Header;
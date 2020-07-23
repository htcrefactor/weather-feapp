import React from 'react';
class Cities extends React.Component {
    // componentDidMount() runs when Cities has been mounted.
    componentDidMount() {
    console.log('City component');
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
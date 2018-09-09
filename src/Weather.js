import React, { Component } from 'react';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: 0
    };
  }

  handleZip = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleZip} />
      </div>
    )
  }
}

export default Weather;

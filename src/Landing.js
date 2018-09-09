import React, { Component } from 'react';
import Weather from './Weather';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: ""
      zip: 0
    };
  }

  //
  // lifecycle methods
  //
  componentDidMount() {

    // TODO determine proper scoping for this
    var base = this;
    let letBase = this;
    const constBase = this;

    const poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then( (toParse) => toParse.json())
      .then( (parsed) => {
        console.log(base === letBase && letBase === this && this === constBase);
        base.setState({ quote: parsed });
        console.log('parsed data:', parsed);
      }).catch(function(err) {
        console.log('err fetching shakespeare quote:', err);
      });
  }

  //
  // javascript helpers go here, incl. stuff like iterating through props
  //

  render() {

    let poetry = this.state.quote;
    if (poetry) {
      return (
        <div>
          <h1>Shakespeare:</h1>
          { poetry.poem }
          <hr />
          <Weather />
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>Shakespeare:</h1>
          Loading...
          <hr />
          <Weather />
        </div>
      );
    }
  }
}

export default Landing;

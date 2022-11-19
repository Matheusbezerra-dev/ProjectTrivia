import React, { Component } from 'react';
import loading from '../images/loading-gif-png-5.gif';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={ loading } alt="Loading" />
      </div>
    );
  }
}

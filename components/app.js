import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <h1>Hello MANO</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
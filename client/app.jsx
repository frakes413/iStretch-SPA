import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './style.css';

class App extends Component {
  constructor() {
    super();
  };
  
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    );
  };
}

render(<App />, document.querySelector('#root'));
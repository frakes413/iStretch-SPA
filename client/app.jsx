import React, { Component } from 'react';
// import { render } from 'react-dom';
// import styles from './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      area: '',
      description: '',
      image: '',
    };
    this.clickHanndler = this.clickHanndler.bind(this);
  };

  clickHanndler() {
    console.log('inside clickHandler');
    fetch('http://localhost:5000/api/stretches')
      .then(response => response.json())
      .then(stretch => this.setState({ 
        name: stretch.name,
        area: stretch.area,
        description: stretch.description,
        image: stretch.image,
      }))
      .catch(err => console.log(err));
  };
  
  render() {

    console.log(this.state);

    const list = [];

    for(let i = 0; i < this.state.description.length; i++) {
      list.push(<li>{this.state.description[i]}</li>)
    };

    console.log(list);

    return (
      <div id="content">
        <h1>iStretch</h1>
        <button id="randbutton" onClick={this.clickHanndler}>Random Stretch</button>
        <h2>{this.state.name}</h2>
        <div id="image">
          <img src={this.state.image} id="photo"/>
        </div>
        <h3>Focus Areas: {this.state.area}</h3>
        <ul>
          {list}
        </ul>
      </div>
    );
  };
}

export default App;
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
        area: 'Focus Areas: ' + stretch.area,
        description: stretch.description,
        image: <div id="image"><img src={stretch.image} id="photo"/></div>,
      }))
      .catch(err => console.log(err));
  };
  
  render() {

    console.log(this.state);

    // const img = <img src={this.state.image} id="photo"/>;

    const list = [];

    for(let i = 0; i < this.state.description.length; i++) {
      list.push(<li>{this.state.description[i]}</li>)
    };

    console.log(list);

    return (
      <div id="content">
        <h1>iStretch</h1>
        <div class="button">
          <button id="randbutton" onClick={this.clickHanndler}>Random Stretch</button>
        </div>
        <h2>{this.state.name}</h2>
        {this.state.image}
        <h3>{this.state.area}</h3>
        <div class="directions">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    );
  };
}

export default App;
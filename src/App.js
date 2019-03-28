import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name='Max' age ='28'/>
        <Person name='Manu' age ='30'></Person>
      </div>
    );
  }
}

export default App;

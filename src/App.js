import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // State will be avlaible in components in latets react versions it is avlible in functions too
  // state will be managed in inside component
  // if we change state react rerender the component
  state = {
    persons: [
      { name : 'Max',age:28 },
      { name : 'Manu',age:29 }
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;

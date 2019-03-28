import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name : 'Max',age:28 },
      { name : 'Manu',age:29 }
    ]
  }

swithNameHandler = () =>{
  console.log("clicked");
  //Dont do this
  //this.state.persons[0].name = 'nananana'
  this.setState({persons: 
    [
      { name : 'New name ',age:28 },
      { name : 'Manu',age:23 }
    ]
  })
}
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.swithNameHandler}>Swith name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;

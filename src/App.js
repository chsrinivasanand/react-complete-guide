import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name : 'Max',age:28 },
      { name : 'Manu',age:29 }
    ]
  }

swithNameHandler = (nameNew) =>{
  console.log("clicked");
  //Dont do this
  //this.state.persons[0].name = 'nananana'
  this.setState({persons: 
    [
      { name : nameNew,age:28 },
      { name : 'Manu',age:23 }
    ]
  })
}

nameChangedHandler = (event) => {
    this.setState({persons:
            [
                { name : 'Max',age:32 },
                { name : event.target.value,age:33 }
            ]
    })
}


  render() {
      const style = {
          backgroundColor: 'White',
          infont: 'inherit',
          border: '1px sold blue',
          padding: '8px',
          cursor: 'pointer'
      }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button
            style={style}
            onClick={() => this.swithNameHandler('nenw name!!')}>Swith name</button>
        <Person 
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click = {this.swithNameHandler.bind(this,"newName!")}
          changed = {this.nameChangedHandler} >My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;

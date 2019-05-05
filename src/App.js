import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name : 'Max',age:28 },
      { name : 'Manu',age:29 }
    ],
      showPersons: false
  }


nameChangedHandler = (event) => {
    this.setState({persons:
            [
                { name : 'Max',age:32 },
                { name : event.target.value,age:33 }
            ]
    })
}

deletePersonHandler = (personIndex)=>{
      //const persons = this.state.persons.slice();  // add slice() it will create new copy so it will handle below mentions bad practice
    const persons = [...this.state.persons];  // equivalent to above behavior ,moderen way
    persons.splice(personIndex,1); // in java script object and arrays are referenced type. hence we are altering the actual state of the object  -- bad practice
      this.setState({persons:persons});
}

//if we use this structure it will always refers 'this' objects as current class object
togglePersonHandler = () => {
    const doesShow = this.state.showPersons ;
    this.setState({showPersons : !doesShow });

}

  render() {
      const style = {
          backgroundColor: 'White',
          infont: 'inherit',
          border: '1px sold blue',
          padding: '8px',
          cursor: 'pointer'
      }

      let persons = null;

      if (this.state.showPersons)
      {
          persons = (
              <div>
                  {this.state.persons.map((person,index) =>{
                      return  <Person
                          click={() => this.deletePersonHandler(index)} // another way of calling click= {this.deletePersonHandler.bind(this,index)}
                          name={person.name}
                          age={person.age}/>

                  })}
              </div>

          );
      }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button
            style={style}
            onClick={this.togglePersonHandler}>Show/Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;

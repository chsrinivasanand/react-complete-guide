import React, { Component } from 'react';
import CSSclasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'sdfg', name : 'Max',age:28 },
      { id: 'dfgh', name : 'Manu',age:29 }
    ],
      showPersons: false
  }


nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id ;
    });

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({persons: persons})
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
     let persons = null;
      if (this.state.showPersons)
      {
          persons = (
                  <Persons persons={this.state.persons}
                           clicked = {this.deletePersonHandler}
                           changed = {this.nameChangedHandler}
                  />
          );

      }

    return (

      <div className={CSSclasses.App}>
          <Cockpit
              title ={this.props.appTitle}
              showPersons ={this.state.showPersons}
              persons = {this.state.persons}
              clicked = {this.togglePersonHandler}
              />
          {persons}
      </div>

    );
  }
}

export default App;

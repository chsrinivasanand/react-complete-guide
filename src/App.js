import React, { Component } from 'react';
import CSSclasses from './App.css';
import Person from './components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
     let btnClass = '';
      if (this.state.showPersons)
      {
          persons = (
              <div>
                  {this.state.persons.map((person,index) =>{
                      return  <ErrorBoundary key = {person.id}>
                          <Person
                          click={() => this.deletePersonHandler(index)} // another way of calling click= {this.deletePersonHandler.bind(this,index)}
                          name={person.name}
                          age={person.age}
                          changed = {(event) =>this.nameChangedHandler(event,person.id)}
                        />
                      </ErrorBoundary>

                  })}
              </div>

          );

          btnClass = CSSclasses.Red ;
      }

      let classes = [] ;

      if (this.state.persons.length <= 2)
      {
          classes.push(CSSclasses.Red);
      }
      if (this.state.persons.length <=1)
      {
          classes.push(CSSclasses.Bold);
      }




    return (

      <div className={CSSclasses.App}>
        <h1>Hi,I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working </p>
        <button className={btnClass}
            onClick={this.togglePersonHandler}>Show/Hide</button>
        {persons}
      </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot} from 'radium';
import Person from './Person/Person';

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
      const style = {
          backgroundColor: 'green',
          color : 'white',
          infont: 'inherit',
          border: '1px sold blue',
          padding: '8px',
          cursor: 'pointer',
          ':hover' : {
              backgroundColor: 'lightgreen',
              color: 'black'
          }
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
                          age={person.age}
                          key = {person.id} // unique key
                          changed = {(event) =>this.nameChangedHandler(event,person.id)}
                      />

                  })}
              </div>

          );

          style.backgroundColor = 'red';
          style[':hover'] = {
          backgroundColor: 'salmon',
              color: 'black'
      }
      }

      let classes = [] ;

      if (this.state.persons.length <= 2)
      {
          classes.push('Red');
      }
      if (this.state.persons.length <=1)
      {
          classes.push('Bold');
      }




    return (
        <StyleRoot>
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working </p>
        <button
            style={style}
            onClick={this.togglePersonHandler}>Show/Hide</button>
        {persons}
      </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);

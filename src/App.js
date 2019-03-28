import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonState] = useState(
    {
      persons: [
        { name : 'Max',age:28 },
        { name : 'Manu',age:29 }
      ]

    }
  );


  //Keeping multiple states we need this because in hooks state will be overridden with new values
  //it wont keep old values
  //so its better to keep different state objects so that each state can be updated with new values whenever we required .
  const [otherState,setOtherState] = useState('some string');
    console.log(personsState,otherState);
  
    const swithNameHandler = () =>{
    console.log("clicked");
    // in reacthooks will not keep old onjects which are presnt in the state
    //whelre as in components state will be apended i.e old values wills kept as it is in new state along with updated values
    setPersonState({persons: 
      [
        { name : 'New name ',age:28 },
        { name : 'Manu',age:23 }
      ]
    })
    };

  return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={swithNameHandler}>Swith name</button>
        <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age ={personsState.persons[1].age}>My hobbies: Racing</Person>
      </div>
    );
}

export default app;



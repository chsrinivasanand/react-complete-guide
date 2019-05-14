import React from 'react' ;
import cssClasses from './Person.css' ;
const person = (props) => {
    console.log('[Person.js] rendering...');
    return (

        <div className= {cssClasses.Person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} year old </p>
        <p>{props.children}</p>

        <input type="text" onChange={props.changed} value = {props.name} />
        </div>
    )
};
 
export default person;
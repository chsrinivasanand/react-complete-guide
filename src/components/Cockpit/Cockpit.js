import React from 'react'
import CSSclasses from "./Cockpit.css";

const cockpit =(props) => {

    let classes = [] ;
    let btnClass = '';
    if (props.showPersons)
    {
        btnClass = CSSclasses.Red ;
    }

    if (props.persons.length <= 2)
    {
        classes.push(CSSclasses.Red);
    }
    if (props.persons.length <=1)
    {
        classes.push(CSSclasses.Bold);
    }

    return (
        <div className={CSSclasses.Cockpit}>
        <h1>Hi,I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working </p>
    <button className={btnClass}
            onClick={props.clicked}>Show/Hide</button>

        </div>
    );
};

export default cockpit;


import React, {useEffect} from 'react';
// UseEffect - combines functionality of all these class based lifecycle hooks in one
// React hook here and both is called hook,
//
import CSSclasses from "./Cockpit.css";

const cockpit =(props) => {
    //run on every render circle.   - similar to commponetDidUpdate/Mount in react component
    useEffect(()=>
    {
        console.log('[cockpit.js] useEffect')

        setTimeout( ()=> {
            alert('Saved Data to cloud')
            },1000
        );

    },[props.persons]);
//useEffect will call on every render cycle if we want to control to execute on
// particular change we need to pass those as one more attribute
// we can use useEffect as many time as  



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
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working </p>
    <button className={btnClass}
            onClick={props.clicked}>Show/Hide</button>

        </div>
    );
};

export default cockpit;


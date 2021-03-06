import React, {PureComponent} from 'react'
import Person from "./Person/Person";

// PureComponent implements shouldComponentUpdate to check a;l the prop changes
class Persons extends PureComponent {

    static getDerivedStateFromProps(props,state)
    {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('{Persons.js} shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !==  this.props.clicked  )
    //     {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    //    // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('{persons.js} getSnapshotBeforeUpdate')
        return {message: 'snapShot!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('{Persons.js} componentDidUpdate')
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[persons.js] componentWillUnmount')
        //to use cleanup
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)} // another way of calling click= {this.deletePersonHandler.bind(this,index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })

    }
}
export default Persons;
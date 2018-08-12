import React, {Component} from 'react';

import Person from './Person/Person';


class Persons extends React.PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor,',props)
    }


    componentWillMount() {

        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {

        console.log('[Person.js] Inside componentDidMount()');
    }

    componentWillReceiveProps ( nextProps ){

        console.log('[Persons.js ] Inside componentWillReceive nextProps', nextProps)

    }



    componentWillUpdate(nextProps, nextState){

        console.log('[Persons.js ] Inside ComponentWillUpdate nextProps', nextProps,nextState)

        return true;
    }

    componentDidUpdate() {

        console.log('[Person.js] Inside componentDidMount()');
    }


    render() {

        const {persons, clicked, changed} = this.props;

        return (

            persons.map((person, index) => {
                    return <Person
                        click={() => clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => changed(event, person.id)}/>
                }
            ))
    }


}

export default Persons;
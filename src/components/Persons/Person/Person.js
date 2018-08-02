import React, {Component} from 'react';

import classes from './Person.css';


class Person extends Component {

    render () {
        const {click, name, age, children, changed } = this.props;

        return (
            <div className={classes.Person}>
                <p >I'm {name} and I am {age} years old!</p>
                <p>{children}</p>
                <input type="text" onChange={changed} value={name} /> <span onClick={click}>Delete</span>

            </div>
        )
    };


}

export default Person;
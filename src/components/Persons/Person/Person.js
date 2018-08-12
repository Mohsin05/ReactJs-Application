import React, {Component} from 'react';

import classes from './Person.css';

import WithClass from '../../../hoc/withClass';
import Aux from "../../../hoc/Aux";


class Person extends Component {

    render () {
        const {click, name, age, children, changed } = this.props;

        return (
            <Aux>
                <p >I'm {name} and I am {age} years old!</p>
                <p>{children}</p>
                <input type="text" onChange={changed} value={name} /> <span onClick={click}>Delete</span>

            </Aux>
        )
    };


}

export default WithClass(Person,classes.Person);
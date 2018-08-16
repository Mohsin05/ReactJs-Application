import React, {Component} from 'react';

import classes from './Person.css';
import propTypes from 'prop-types';

import WithClass from '../../../hoc/withClass';
import Aux from "../../../hoc/Aux";

import {AuthContext} from "../../../containers/App";

class Person extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
        this.inputElement = React.createRef();
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );

        if( this.props.position === 0) {
        this.inputElement.current.focus();
        }

    }

    render () {
        const {click, name, age, children, changed } = this.props;

        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}</AuthContext.Consumer>
                <p >I'm {name} and I am {age} years old!</p>
                <p>{children}</p>
                <input type="text"
                       ref={this.inputElement}
                       onChange={changed}
                       value={name} />

                <span onClick={click}>Delete</span>

            </Aux>
        )
    };


}


Person.propTypes = {

click: propTypes.func,
name: propTypes.string,
age: propTypes.number,
changed:propTypes.func




}

export default WithClass(Person,classes.Person);
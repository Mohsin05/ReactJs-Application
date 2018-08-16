import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import Aux from "../hoc/Aux";

export const AuthContext = React.createContext(false);

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor,', props)

        this.state = {
            persons: [
                {id: 'asfa1', name: 'Max', age: 28},
                {id: 'vasdf1', name: 'Manu', age: 29},
                {id: 'asdf11', name: 'Stephanie', age: 26}
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0,
            authenticated:false
        }
    }


    componentWillMount() {

        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {

        console.log('[App.js] Inside componentDidMount()');
    }


    componentWillUpdate(nextProps, nextState) {

        console.log('[App.js ] Inside ComponentWillUpdate nextProps', nextProps, nextState)

        return nextState.persons;
    }

    componentDidUpdate() {

        console.log('[Update App.js] Inside componentDidMount()');
    }

    static getDerivedStateFromProps(nextProps, prevState){

        console.log('[App.js ] Inside  getDerivedStateFromProps', nextProps, prevState)

        return prevState;
    }

    getSnapshotBeforeUpdate () {

        console.log('[App.js ] Inside  getSnapshotBeforeUpdate', nextProps, prevState)



    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState ((prevState, props) => {

            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            };
        })
    }

    loginHandler = () => {

        this.setState({authenticated:true});

    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons:true})}}>Click Me</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    login = {this.loginHandler}
                    clicked={this.togglePersonsHandler}/>

                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                    </AuthContext.Provider>

            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}


export default WithClass(App,classes.App);

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state = {
        value:'',
        showPerson : false,
        person : [
        {name : 'Max', age:28},
        {name : 'Sami', age:22},

        ],

    otherState: 'Some other state Values'
    }

    togglePersonHandler= ()=>{

        const invertOnClick = this.state.showPerson;

        this.setState({

           showPerson : !invertOnClick
        });

    }

    inputFieldChange = (event) =>{

        this.setState({

            person : [
                {name : event.target.value, age:22},
            ],
        });

    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };


        let person = null;
        if(this.state.showPerson) {

            person = (
                <div>
                    <Person
                        name={this.state.person[0].name}
                        age={this.state.person[0].age}
                        OnChange={this.inputFieldChange}
                    />
                </div>
            );
        }

        return (

      <div className="App">
        <h1>
            Hi, I am a React-App!
        </h1>

          <button  style={style} onClick={this.togglePersonHandler}>Show Name</button>

          { person
          }

      </div>
    );
  }
}

export default App;

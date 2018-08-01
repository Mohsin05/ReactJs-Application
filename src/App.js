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

        this.setState({

           showPerson : true
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

        return (

      <div className="App">
        <h1>
            Hi, I am a React-App!
        </h1>

          <button  style={style} onClick={this.togglePersonHandler}>Show Name</button>
          { this.state.showPerson ?
              <div>
                  <Person
                      name={this.state.person[0].name}
                      age={this.state.person[0].age}
                      OnChange={this.inputFieldChange}
                  />
              </div> : null
          }
      </div>
    );
  }
}

export default App;

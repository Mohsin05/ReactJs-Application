import React from 'react';
import './Person.css';


class Person extends React.PureComponent {



    render() {
        const {name , age, OnChange} = this.props;

            return (

                <div className="person">

                <p>I'm a {name} and I am {age} years old <br/>
                    <br/>


                 <input type="text" onChange={OnChange} value={name}/>

                </p>

                </div>
            )

        };
}

export default Person;
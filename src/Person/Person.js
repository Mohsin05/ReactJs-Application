import React from 'react';
import './Person.css';
import Radium from "radium";


class Person extends React.PureComponent {



    render() {
        const {name , age, onChanged, click} = this.props;
        const style = {

            '@media (min-width: 500px)' : {

                width: '450px'
            }


        }
            return (

                <div className="person" style={style}>

                <p>I'm a {name} and I am {age} years old <br/>
                    <br/>


                 <input type="text" onChange={onChanged} value={name}/>
                 <strong onClick={click}> Delete </strong>
                </p>

                </div>
            )

        };
}

export default Radium(Person);
import React from 'react';
import styles from './Person.css';


class Person extends React.PureComponent {



    render() {
        const {name , age, onChanged, click} = this.props;
        const rnd = Math.random();

        if ( rnd > 0.7 ) {
            throw new Error( 'Something went wrong' );
        }

            return (

                <div className={styles.person} >

                <p>I'm a {name} and I am {age} years old <br/>
                    <br/>


                 <input type="text" onChange={onChanged} value={name}/>
                 <strong onClick={click}> Delete </strong>
                </p>

                </div>
            )

        };
}

export default Person;
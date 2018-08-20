import React from 'react';
import classes from './BurgerIngedient.css'

const burgerIngredient = (props) =>{

    let ingregdient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingregdient = <div className={ classes.BreadBottom }></div>;
            break;

        case ('bread-top'):
            ingregdient = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;

        case ('meat'):
            ingregdient = <div className={classes.Meat}></div>
            break;

        case ('cheese'):
            ingregdient = <div className={classes.Cheese}></div>
            break;

        case ('salad'):
            ingregdient = <div className={classes.Salad}></div>
            break;

        case ('bacon'):
            ingregdient = <div className={classes.Bacon}></div>
            break;

        default:
            ingregdient = null;
    }

    return ingregdient;



};

export default burgerIngredient;
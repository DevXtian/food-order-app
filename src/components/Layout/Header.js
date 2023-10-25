import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/img/meals.jpg';
import classes from './Header.module.css';

const Header = props => {

    return <Fragment>

        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClickCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Food Banner'/>
        </div>

    </Fragment>

};

export default Header;
import React from 'react';

import { Link } from 'react-router-dom';

import basket from './basket.png';

import style from './style.module.css'

function LinkBasket(props) {

    return (
        <Link to={{pathname:'/cart', purchases: props.purchases}} className={style.link}>
            <div className={style.amount}>
                <span className={style.amountElement}>
                    {props.purchases.length}
                </span>
            </div>
            <img src={basket} alt = "basket" className={style.icon}/>
        </Link>
    );

}

export default LinkBasket;


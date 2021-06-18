import React, { useState } from 'react';

import style from './style.module.css'

function Product (props) {

    const [inputValue, setInputValue] = useState(props.purchase ? props.purchase.amount : 0);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleClick() {
        let item = {};
        Object.assign(item, props.item);
        item.amount = +inputValue;
        props.onAmountChange(item);
    }


    return (
        <div key={props.item.id} className={style.product}>
            <span className={style.name}>{props.item.name}</span>
            <span className={style.price}>{`${props.item.price} $`}</span>
            <input type="number" min="0" value={inputValue} onChange={handleChange} className={style.input}/>
            <button onClick={handleClick} className={style.button}>Додати</button>
        </div>
    );

}

export default Product;
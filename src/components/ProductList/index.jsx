import React from 'react'
import Product from '../Product'

import style from './style.module.css';

function ProductList (props) {

    function handleAmountChange (item) {
        props.onAmountChange(item);
    }

    return (
        <div className={style.list}>
            {props.goods.map((item, index) => {
                let searchIndex = props.purchases.findIndex(stateItem => stateItem.id === item.id);
                let purchase = searchIndex !== -1 ? props.purchases[searchIndex] : null;
                return (
                    <Product item={item} key={item.id} purchase={purchase} onAmountChange={handleAmountChange}/>
                )
            })}
        </div>
    )
}

export default ProductList;
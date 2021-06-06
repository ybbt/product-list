import React, { Component } from 'react'
import Product from '../Product'

import style from './style.module.css';

export class ProductList extends Component {

    handleAmountChange = (item) => {
        this.props.onAmountChange(item);
    }

    render() {
        return (
            <div className={style.list}>
                {this.props.goods.map((item, index) => {
                    let searchIndex = this.props.purchases.findIndex(stateItem => stateItem.id === item.id);
                    let purchase = searchIndex !== -1 ? this.props.purchases[searchIndex] : null;
                    return (
                        <Product item={item} key={item.id} purchase={purchase} onAmountChange={this.handleAmountChange}/>
                    )
                })}
            </div>
        )
    }
}

export default ProductList;
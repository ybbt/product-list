import React, { Component } from 'react'
import Product from '../Product'

// import style from './style.module.css';

export class ProductList extends Component {

    handleAmountChange = (item) => {
        this.props.onAmountChange(item);
    }

    render() {
        // console.log(this.props.goods[0]);
        return (
            <div>
                {this.props.goods.map((item, index) => {
                    return (
                        <Product item={item} key={item.id} onAmountChange={this.handleAmountChange}/>
                    )
                })}
            </div>
        )
    }
}

export default ProductList;
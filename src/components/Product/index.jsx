import React from 'react';

import style from './style.module.css'

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: props.purchase ? props.purchase.amount : 0};
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    handleClick = () => {
        let item = {};
        Object.assign(item, this.props.item);
        item.amount = +this.state.inputValue;
        this.props.onAmountChange(item);
    }

    render() {
        return (
            <div key={this.props.item.id} className={style.product}>
                <span className={style.name}>{this.props.item.name}</span>
                <span className={style.price}>{`${this.props.item.price} $`}</span>
                <input type="number" min="0" value={this.state.inputValue} onChange={this.handleChange} className={style.input}/>
                <button onClick={this.handleClick} className={style.button}>Додати</button>
            </div>
        );
    }
}

export default Product;
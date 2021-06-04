import React from 'react';

// import style from './style.module.css'

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ""};
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    handleClick = () => {
        let item = {};
        Object.assign(item, this.props.item);
        item.amount = this.state.inputValue;
        this.props.onAmountChange(item);
    }

    render() {
        return (
            <div key={this.props.item.id}>
                <span>{this.props.item.name}</span>
                <span>{this.props.item.price}</span>
                <input type="number" min="1" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Добавить</button>
            </div>
        );
    }
}

export default Product;
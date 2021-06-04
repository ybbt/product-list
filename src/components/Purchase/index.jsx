import React from 'react';

// import style from './style.module.css'

class Purchase extends React.Component {

    calculationTotalPrice(price, discount, discountAmount, amount){
        return price * amount - discount * Math.floor(amount/discountAmount);
    }

    render() {
        let {name, price, discount, discountAmount, amount} = this.props.item;
        return (
            <React.Fragment>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{price}</td>
                <td>
                    {discount !== undefined ? this.calculationTotalPrice(price, discount, discountAmount, amount): price*amount}
                </td>
            </React.Fragment>

        );
    }
}

export default Purchase;
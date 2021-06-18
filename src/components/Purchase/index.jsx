import React from 'react';

// import style from './style.module.css'

function Purchase(props) {

    let {name, price, amount, totalPrice} = props.item;
    return (
        <React.Fragment>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{`${price} $`}</td>
            <td>
                {/* {`${discount !== undefined ? calculationTotalPrice(price, discount, discountAmount, amount): price*amount} $`} */}
                {`${totalPrice} $`}
            </td>
        </React.Fragment>

    );

}

export default Purchase;
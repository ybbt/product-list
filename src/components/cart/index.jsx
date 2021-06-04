import React from 'react';

import PurchaseList from '../PurchaseList'

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {purchases : props.location.purchases};
    }

    render() {
        console.log(`this.props`, this.props);
        return (

            <div >
                <h1>Корзина</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Найменування</td>
                                <td>Кількість</td>
                                <td>Вартість</td>
                                <td>Загальна вартість зі знижкою</td>
                            </tr>
                        </thead>
                        <tbody>
                            <PurchaseList purchase={this.state.purchases}/>
                        </tbody>
                    </table>
                </div>
            </div>
	    );
    }
}

export default Cart;
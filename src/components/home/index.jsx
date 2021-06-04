import React from 'react';
import ProductList from '../ProductList';

import { Link } from 'react-router-dom';

// import style from './style.module.css'

class Home extends React.Component {

    constructor(props) {
        super(props);
        let goods = [
                {id: 1, name: "Банан", price: 10}, 
                {id: 2, name: "Яблоко", price: 8}, 
                {id: 3, name: "Папайя", price: 10, discount: 5, discountAmount: 3}
            ];
        let purchases = [];
        this.state = {
            goods,
            purchases
        };

    }

    handleAmountChange = (item) => {
        this.setState(function(state, props) {
            let purchases = [];
            Object.assign(purchases, state.purchases);
            if(purchases.length > 0){
                let index = purchases.findIndex(stateItem => stateItem.id === item.id);
                console.log(`index`, index);
                index === -1 ? purchases.push(item) : purchases[index] = item;
            } else purchases.push(item);
            
            
            return {
                purchases: purchases
            };
        });
    }

    render() {
        return (

            <div >
                <h1>Перелік товарів</h1>
                <div className="App-main">
                    <ProductList goods={this.state.goods} onAmountChange={this.handleAmountChange} />
                </div>
                <Link to={{pathname:'/cart', purchases:this.state.purchases}}>Корзина</Link>
            </div>
	    );
    }
}

export default Home;
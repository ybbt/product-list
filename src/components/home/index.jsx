import React from 'react';
import ProductList from '../ProductList';
import LinkBasket from '../LinkBasket';

import style from './style.module.css'

class Home extends React.Component {

    constructor(props) {
        super(props);
        let goods = [
                {id: 1, name: "Банан", price: 10},
                {id: 2, name: "Яблоко", price: 8},
                {id: 3, name: "Папайя", price: 10, discount: 5, discountAmount: 3}
            ];
        let purchases = (props.location.purchases || []);
        this.state = {
            goods,
            purchases,
            keyOfList : 1
        };
    }

    handleClearCart = () => {
        let {keyOfList} = this.state;
        this.setState(
            {
                purchases : [],
                keyOfList : ++keyOfList
            }
        )
    }

    handleAmountChange = (item) => {
        this.setState(function(state, props) {
            let purchases = [];
            Object.assign(purchases, state.purchases);
            if(purchases.length > 0){
                let index = purchases.findIndex(stateItem => stateItem.id === item.id);
                if (index !== -1) {
                    if (item.amount !== 0) {
                        purchases[index] = item;
                    } else {
                        purchases.splice(index, 1);
                    }
                } else {
                    if (item.amount !== 0) {
                        purchases.push(item);
                    }
                }
            } else {
                if(item.amount !== 0) purchases.push(item);
            };

            return {
                purchases: purchases
            };
        });
    }

    render() {
        return (
            <div className={style.display}>
                <div className={style.goodsCard}>
                    <header className={style.header}>
                        <LinkBasket purchases={this.state.purchases} />
                    </header>
                    <main >
                        <h1 className={style.listName}>Перелік товарів</h1>
                        <div >
                            <ProductList key={this.state.keyOfList} goods={this.state.goods} purchases={this.state.purchases} onAmountChange={this.handleAmountChange} />
                            <div className={style.clearCart}>
                                <button className={style.button} onClick={this.handleClearCart}>Очистити кошик</button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Home;
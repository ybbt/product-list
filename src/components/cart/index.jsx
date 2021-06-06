import React from 'react';

import PurchaseList from '../PurchaseList'

import { Link } from 'react-router-dom';

import style from "./style.module.css";

class Cart extends React.Component {

    sortPurchases(item, nextItem){
        if (item.id > nextItem.id) return 1;
        if (item.id === nextItem.id) return 0;
        if (item.id < nextItem.id) return -1;
    }

    render() {
        let purchases = (this.props.location.purchases || []);
        purchases.sort(this.sortPurchases);
        return (

        
        // this.state = {purchases : (purchases || [])};

            <main className={style.cart}>
                <h1 className={style.name}>Кошик</h1>
                <div>
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th>Найменування</th>
                                <th>Кількість</th>
                                <th>Вартість</th>
                                <th>Загальна вартість зі знижкою</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchases.length !== 0
                                ?<PurchaseList purchase={purchases}/>
                                :<tr><td>Кошик порожній</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
                <Link to={{pathname:'/', purchases}}>На головну</Link>
            </main>
        );
    }
}

export default Cart;
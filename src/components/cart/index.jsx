import React, {useState} from 'react';

import PurchaseList from '../PurchaseList'

import { Link } from 'react-router-dom';

import style from "./style.module.css";

function Cart(props) {


    function sortPurchases(item, nextItem){
        if (item.id > nextItem.id) return 1;
        if (item.id === nextItem.id) return 0;
        if (item.id < nextItem.id) return -1;
    }

    let propsPurchases = (props.location.purchases || []);
    propsPurchases.sort(sortPurchases);
    
    const [purchases, setPurchases] = useState(propsPurchases);

    function handlerClearCart(e){
        setPurchases([]);
    }

    return (

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
                            ?<PurchaseList purchase={purchases} />
                            :<tr><td colSpan="4">Кошик порожній</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <button className={style.buttonClearCart} onClick={handlerClearCart}>Очистити кошик</button>
            <Link to={{pathname:'/', purchases}}>На головну</Link>
        </main>
    );

}

export default Cart;
import React, {useState} from 'react';
import ProductList from '../ProductList';
import LinkBasket from '../LinkBasket';

import style from './style.module.css'

function Home(props) {

    let goodsList = [
                {id: 1, name: "Банан", price: 10},
                {id: 2, name: "Яблоко", price: 8},
                {id: 3, name: "Папайя", price: 10, discount: 5, discountAmount: 3}
            ];

    let purchasesList = (props.location.purchases || []);

    const [goods] = useState(goodsList);
    const [purchases, setPurchases] = useState(purchasesList);
    const [keyOfList, setKeyOfLists] = useState(1);


    function handleClearCart() {
        setPurchases([]);
        setKeyOfLists(keyOfList + 1);
    }

    function changePurchases(item) {
        let purchasesList = [];
        Object.assign(purchasesList, purchases);
        if(purchasesList.length > 0){
            let index = purchasesList.findIndex(stateItem => stateItem.id === item.id);
            if (index !== -1) {
                if (item.amount !== 0) {
                    purchasesList[index] = item;
                } else {
                    purchasesList.splice(index, 1);
                }
            } else {
                if (item.amount !== 0) {
                    purchasesList.push(item);
                }
            }
        } else {
            if(item.amount !== 0) purchasesList.push(item);
        };
        return purchasesList;
    };

    function calculationTotalPrice(item){
        let {price, discount, discountAmount, amount} = item;
        let totalPrice = price * amount;
        if (discount !== undefined) {
            totalPrice = totalPrice - discount * Math.floor(amount/discountAmount)
        }
        return totalPrice;
    }

    function handleAmountChange(item) {
        item.totalPrice = calculationTotalPrice(item);
        setPurchases(changePurchases(item));
    }

    return (
        <div className={style.display}>
            <div className={style.goodsCard}>
                <header className={style.header}>
                    <LinkBasket purchases={purchases}/>
                </header>
                <main >
                    <h1 className={style.listName}>Перелік товарів</h1>
                    <div >
                        <ProductList key={keyOfList} goods={goods} purchases={purchases} onAmountChange={handleAmountChange} />
                        <div className={style.clearCart}>
                            <button className={style.button} onClick={handleClearCart}>Очистити кошик</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

}

export default Home;
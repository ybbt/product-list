import React from 'react'
import Purchase from '../Purchase'

// import style from './style.module.css';[...iterableObj, '4', 'five', 6];

function PurchaseList(props) {

    let purchasesPrice = props.purchase.reduce((accumulator, item)=>{
        return accumulator + item.totalPrice;
    }, 0);


    return (
        <React.Fragment>
            {props.purchase.map((item, index) => {
               
                return (
                    <tr key={item.id} >
                        <Purchase item={item}  />
                    </tr>
                )
            })}
            <tr>
                <td colSpan="3">Сумарна вартість</td>
                <td>{`${purchasesPrice} $`}</td>
            </tr>
        </React.Fragment>
    )
    
}

export default PurchaseList;
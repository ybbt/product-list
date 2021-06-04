import React, { Component } from 'react'
import Purchase from '../Purchase'

// import style from './style.module.css';

export class PurchaseList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.purchase.map((item, index) => {
                    return (
                        <tr key={item.id} >
                            <Purchase item={item}  />
                        </tr>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default PurchaseList;
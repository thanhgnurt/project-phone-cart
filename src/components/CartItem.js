import React, { Component } from 'react';
import * as message from './../constants/Message'
export default class CartItem extends Component {
    onDeleteProduct = (indexDelete) => {
        this.props.onDeleteProduct(indexDelete);
        this.props.onChangeMessage(message.MEG_DELETE_CART_SUCCESS)
    }
    onUpdateCart = (indexUpdate, requestUpdate) => {
        this.props.onUpdateCart(indexUpdate, requestUpdate);
       
        let { item } = this.props;
        if (item.product.inventory === item.quantity) {
            this.props.onChangeMessage(message.MEG_EMTY_INVENTORY)
        } else {
            this.props.onChangeMessage(message.MEG_UPDATE_CART_SUCCESS )
        }
    }
    render() {
        let { item, index } = this.props
        return (
            <tr>
                <th scope="row">
                    <img alt={item.product.name}
                        className="img-fluid z-depth-0"
                        src={item.product.image}
                    />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateCart(index, false)}
                        >
                            <span >—</span>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateCart(index, true)}
                        >
                            <span >+</span>
                        </label>
                    </div>
                </td>
                <td>{item.quantity * item.product.price}</td>
                <td>
                    <button
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        type="button"
                        data-toggle="tooltip"
                        data-original-title="Remove item"
                        data-placement="top"
                        onClick={() => { this.onDeleteProduct(index) }}
                    >
                        X
</button>
                </td>
            </tr>
        )
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult'
import {actDeleteProduct, actChangeMessage, actUpdateCart} from './../actions/index'
class CartContainer extends Component {
    showCartItem = (cart) => {
        
        
        let { onChangeMessage, onDeleteProduct, onUpdateCart } = this.props
        let result = 
        <tr>
            <td>{Message.MEG_CART_EMPTY}</td>
        </tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key = { item.product.id }
                    item = { item }
                    index = { index }
                    onDeleteProduct = { onDeleteProduct }
                    onChangeMessage = { onChangeMessage }
                    onUpdateCart = { onUpdateCart }
                />
            })
        }
        return result
    }
// delete product on cart
   
    showTotalAmount = (cart) => {
        let result = null
        let total = 0
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].quantity * cart[i].product.price
            }
        }
        if (cart.length > 0) {
            result = <CartResult total={total} />
        }
        return result
    }
    render() {
        let { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
}
CartContainer.propTypes = {
    cart: Proptypes.arrayOf(
        Proptypes.shape({
            product: Proptypes.shape({
                id: Proptypes.number.isRequired,
                name: Proptypes.string.isRequired,
                image: Proptypes.string.isRequired,
                description: Proptypes.string.isRequired,
                price: Proptypes.number.isRequired,
                inventory: Proptypes.number.isRequired,
                rating: Proptypes.number.isRequired
            }).isRequired,
            quantity: Proptypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct : (indexDelete) => {
            dispatch(actDeleteProduct(indexDelete))
        },
        onChangeMessage : (messageDelete) => {
            dispatch(actChangeMessage(messageDelete))
        },
        onUpdateCart : (indexUpdate,requestUpdate) => {
            dispatch(actUpdateCart(indexUpdate, requestUpdate))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

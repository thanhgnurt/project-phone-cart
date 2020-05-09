import React, { Component } from 'react';
import * as message from './../constants/Message'
export default class Product extends Component {
    showRating = (rating) => {
        let element = []
        for (let i = 1; i <= rating; i++) {
            element.push(<i className="fa fa-star" key={i} />)
        }
        if (rating % 1 !== 0) {
            element.push(<i className="fa fa-star-half-o" key='half' />)
        }
        for (let j = 1; j <= 5 - rating; j++) {
            element.push(<i className="fa fa-star-o" key={rating + j} />)
        }
        return element
    }
    onAddToCart = (product) => {
        let result = this.findInventory()
        this.props.onAddToCart(product, result);
        if (result === 0) {
            this.props.onChangeMessage(message.MEG_EMTY_INVENTORY)
        } else {
            this.props.onChangeMessage(message.MEG_ADD_TO_CART_SUCCESS)
        }
    }
    findInventory = () => {
        let { cart, product } = this.props
        let result = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].product.id === product.id) {
                    result = product.inventory - cart[i].quantity; break;
                } else {
                    result = product.inventory;
                }
            }
        } else {
            result = product.inventory
        }
        return result
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r" key={product.id}>
                <div className="card text-center card-cascade narrower" >
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img alt={product.name}
                            className="img-fluid"
                            src={product.image}
                        />
                        <div >
                            <div className="mask waves-light waves-effect waves-light" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <span >{product.name}</span>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">{product.description}</p>
                        <div className="card-footer">
                            <span className="left">{product.price} $</span>
                            <span data-toggle="tooltip" title="Inventory" className="">
                                <i className="fa fa-database mr-2 text-primary " />
                                {this.findInventory()}
                            </span>
                            <span className="right">
                                <button
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-original-title="Add to Cart"
                                    data-placement="top"
                                    onClick={() => { this.onAddToCart(product) }}
                                >
                                    <i className="fa fa-shopping-cart" ></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

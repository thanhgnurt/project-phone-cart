import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import Proptypes from 'prop-types';
import { onAddToCart, actChangeMessage } from './../actions/index'
class ProductContainer extends Component {
   


    render() {
        let { products, onAddToCart, onChangeMessage } = this.props;
        let { cart } = this.props;
        
        

        
        

        let element = products.map((product, index) => {
            return <Product
                product={product}
                key={index}
                index={index}
                onAddToCart={onAddToCart}
                onChangeMessage={onChangeMessage}
                cart = {cart}
                
            />
        })


        return (
            <Products>{element}</Products>
        )
    }
}
ProductContainer.propTypes = {
    products: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            name: Proptypes.string.isRequired,
            image: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            price: Proptypes.number.isRequired,
            inventory: Proptypes.number.isRequired,
            rating: Proptypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = state => {
    return {
        products: state.products,
        cart : state.cart,
        

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product, result) => {
            dispatch(onAddToCart(product, result, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
